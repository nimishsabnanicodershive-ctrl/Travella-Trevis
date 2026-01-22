import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Load environment variables from .env.local at project root
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Gemini AI
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error('ERROR: GEMINI_API_KEY is not set in .env.local');
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'AI Planner API is running' });
});

// AI Itinerary planning endpoint
app.post('/api/plan', async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ 
        error: 'Invalid request: prompt is required' 
      });
    }

    console.log(`[API] Received prompt: ${prompt.substring(0, 50)}...`);

    // Get the generative model
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-1.5-flash-latest',
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 2048,
      }
    });

    // Generate content
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    console.log(`[API] Gemini response received: ${text.substring(0, 100)}...`);

    // Try to parse the JSON response
    let jsonData;
    try {
      // Try to extract JSON from markdown code blocks if present
      const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/) || text.match(/```\s*([\s\S]*?)\s*```/);
      const cleanText = jsonMatch ? jsonMatch[1] : text;
      
      jsonData = JSON.parse(cleanText.trim());
    } catch (parseError) {
      console.error('[API] Failed to parse JSON from Gemini response:', parseError);
      console.error('[API] Raw response:', text);
      
      return res.status(500).json({ 
        error: 'AI generated an invalid response format. Please try again.',
        raw: text.substring(0, 200)
      });
    }

    // Validate the response structure - flexible validation for different use cases
    const hasItineraryStructure = jsonData.title && jsonData.summary && Array.isArray(jsonData.days);
    const hasTrailStructure = jsonData.imagePrompt && Array.isArray(jsonData.dailyPlan);
    
    if (!hasItineraryStructure && !hasTrailStructure) {
      console.error('[API] Invalid response structure:', jsonData);
      return res.status(500).json({ 
        error: 'AI response is missing required fields',
        received: jsonData
      });
    }

    console.log('[API] Successfully generated response');
    res.json(jsonData);

  } catch (error: any) {
    console.error('[API] Error generating itinerary:', error);
    res.status(500).json({ 
      error: 'Failed to generate itinerary',
      message: error.message || 'Unknown error occurred'
    });
  }
});

// AI Experience Suggestions endpoint
app.post('/api/suggest-experiences', async (req: Request, res: Response) => {
  try {
    const { preferences } = req.body;

    if (!preferences || typeof preferences !== 'string') {
      return res.status(400).json({ 
        error: 'Invalid request: preferences is required' 
      });
    }

    console.log(`[API] Generating experience suggestions for: ${preferences.substring(0, 50)}...`);

    const model = genAI.getGenerativeModel({ 
      model: 'gemini-1.5-flash',
      generationConfig: {
        temperature: 0.8,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 2048,
      }
    });

    const prompt = `Based on these travel preferences: "${preferences}", suggest 3 unique travel experiences. 
    Return strict JSON with shape: 
    {
      "experiences": [
        {
          "title": string,
          "location": string,
          "tags": string[],
          "description": string,
          "estimatedDays": number,
          "priceRange": string
        }
      ]
    }`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    console.log(`[API] Experience suggestions received: ${text.substring(0, 100)}...`);

    let jsonData;
    try {
      const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/) || text.match(/```\s*([\s\S]*?)\s*```/);
      const cleanText = jsonMatch ? jsonMatch[1] : text;
      jsonData = JSON.parse(cleanText.trim());
    } catch (parseError) {
      console.error('[API] Failed to parse JSON:', parseError);
      return res.status(500).json({ 
        error: 'AI generated an invalid response format.',
        raw: text.substring(0, 200)
      });
    }

    if (!jsonData.experiences || !Array.isArray(jsonData.experiences)) {
      console.error('[API] Invalid response structure:', jsonData);
      return res.status(500).json({ 
        error: 'AI response is missing required fields',
        received: jsonData
      });
    }

    console.log(`[API] Successfully generated ${jsonData.experiences.length} experience suggestions`);
    res.json(jsonData);

  } catch (error: any) {
    console.error('[API] Error generating experience suggestions:', error);
    res.status(500).json({ 
      error: 'Failed to generate experience suggestions',
      message: error.message || 'Unknown error occurred'
    });
  }
});

// AI Itinerary Recommendations endpoint
app.post('/api/recommend-itineraries', async (req: Request, res: Response) => {
  try {
    const { interests, duration, budget } = req.body;

    if (!interests || typeof interests !== 'string') {
      return res.status(400).json({ 
        error: 'Invalid request: interests is required' 
      });
    }

    console.log(`[API] Generating itinerary recommendations for: ${interests.substring(0, 50)}...`);

    const model = genAI.getGenerativeModel({ 
      model: 'gemini-1.5-flash',
      generationConfig: {
        temperature: 0.8,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 2048,
      }
    });

    const prompt = `Based on these travel interests: "${interests}"${duration ? `, duration: ${duration} days` : ''}${budget ? `, budget: $${budget}` : ''}, recommend 3 curated travel itineraries. 
    Return strict JSON with shape: 
    {
      "itineraries": [
        {
          "title": string,
          "days": number,
          "price": number,
          "region": string,
          "highlights": string[],
          "bestFor": string
        }
      ]
    }`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    console.log(`[API] Itinerary recommendations received: ${text.substring(0, 100)}...`);

    let jsonData;
    try {
      const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/) || text.match(/```\s*([\s\S]*?)\s*```/);
      const cleanText = jsonMatch ? jsonMatch[1] : text;
      jsonData = JSON.parse(cleanText.trim());
    } catch (parseError) {
      console.error('[API] Failed to parse JSON:', parseError);
      return res.status(500).json({ 
        error: 'AI generated an invalid response format.',
        raw: text.substring(0, 200)
      });
    }

    if (!jsonData.itineraries || !Array.isArray(jsonData.itineraries)) {
      console.error('[API] Invalid response structure:', jsonData);
      return res.status(500).json({ 
        error: 'AI response is missing required fields',
        received: jsonData
      });
    }

    console.log(`[API] Successfully generated ${jsonData.itineraries.length} itinerary recommendations`);
    res.json(jsonData);

  } catch (error: any) {
    console.error('[API] Error generating itinerary recommendations:', error);
    res.status(500).json({ 
      error: 'Failed to generate itinerary recommendations',
      message: error.message || 'Unknown error occurred'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 AI Planner API Server running on http://localhost:${PORT}`);
  console.log(`📍 Endpoints:`);
  console.log(`   - POST ${PORT}/api/plan (Generate travel itinerary)`);
  console.log(`   - POST ${PORT}/api/suggest-experiences (Get experience suggestions)`);
  console.log(`   - POST ${PORT}/api/recommend-itineraries (Get itinerary recommendations)`);
  console.log(`   - GET ${PORT}/api/health (Health check)`);
  console.log(`🔑 Gemini API Key: ${apiKey ? '✓ Configured' : '✗ Missing'}\n`);
});

export default app;
