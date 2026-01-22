
import React from 'react';
import { Destination } from './types';

export const DESTINATIONS: Destination[] = [
  { id: '1', name: 'Santorini', country: 'Greece', description: 'Breathtaking sunsets over whitewashed caldera villages.', image: 'https://picsum.photos/seed/santorini/800/600', category: 'Beach', price: 1200, rating: 4.9 },
  { id: '2', name: 'Kyoto', country: 'Japan', description: 'Ancient temples, traditional tea houses, and serene gardens.', image: 'https://picsum.photos/seed/kyoto/800/600', category: 'Culture', price: 1500, rating: 4.8 },
  { id: '3', name: 'Swiss Alps', country: 'Switzerland', description: 'Majestic peaks and pristine lakes for year-round adventure.', image: 'https://picsum.photos/seed/alps/800/600', category: 'Nature', price: 2100, rating: 5.0 },
  { id: '4', name: 'Marrakech', country: 'Morocco', description: 'Vibrant souks and stunning moorish architecture.', image: 'https://picsum.photos/seed/marrakech/800/600', category: 'Culture', price: 900, rating: 4.7 },
  { id: '5', name: 'Amalfi Coast', country: 'Italy', description: 'Vertical landscapes of colorful towns hugging the Mediterranean.', image: 'https://picsum.photos/seed/amalfi/800/600', category: 'Beach', price: 1800, rating: 4.9 },
  { id: '6', name: 'Bora Bora', country: 'French Polynesia', description: 'Luxury overwater bungalows in a turquoise lagoon.', image: 'https://picsum.photos/seed/borabora/800/600', category: 'Beach', price: 3500, rating: 5.0 },
  { id: '7', name: 'Prague', country: 'Czech Republic', description: 'The City of a Hundred Spires, rich in history and beer culture.', image: 'https://picsum.photos/seed/prague/800/600', category: 'City', price: 800, rating: 4.6 },
  { id: '8', name: 'Reykjavik', country: 'Iceland', description: 'Gateway to waterfalls, volcanoes, and the Northern Lights.', image: 'https://picsum.photos/seed/iceland/800/600', category: 'Nature', price: 1400, rating: 4.8 },
  { id: '9', name: 'Bali', country: 'Indonesia', description: 'Lush tropical jungles, rice terraces, and spiritual retreats.', image: 'https://picsum.photos/seed/bali/800/600', category: 'Beach', price: 1100, rating: 4.7 },
  { id: '10', name: 'Machu Picchu', country: 'Peru', description: 'The legendary Incan citadel high in the Andes mountains.', image: 'https://picsum.photos/seed/peru/800/600', category: 'Nature', price: 1300, rating: 4.9 },
  { id: '11', name: 'New York City', country: 'USA', description: 'The concrete jungle where dreams are made of.', image: 'https://picsum.photos/seed/nyc/800/600', category: 'City', price: 2200, rating: 4.8 },
  { id: '12', name: 'Cape Town', country: 'South Africa', description: 'Stunning coastal city overlooked by Table Mountain.', image: 'https://picsum.photos/seed/capetown/800/600', category: 'Nature', price: 1250, rating: 4.7 },
  { id: '13', name: 'Lisbon', country: 'Portugal', description: 'Hilly coastal capital known for fado music and pastel de nata.', image: 'https://picsum.photos/seed/lisbon/800/600', category: 'City', price: 950, rating: 4.6 },
  { id: '14', name: 'Banff', country: 'Canada', description: 'Glacier-fed lakes and rugged peaks in the heart of the Rockies.', image: 'https://picsum.photos/seed/banff/800/600', category: 'Nature', price: 1600, rating: 4.9 },
  { id: '15', name: 'Hanoi', country: 'Vietnam', description: 'Century-old architecture and a rich culture with French and Chinese influences.', image: 'https://picsum.photos/seed/hanoi/800/600', category: 'Culture', price: 700, rating: 4.5 },
  { id: '16', name: 'Dubai', country: 'UAE', description: 'Ultramodern architecture and a luxury shopping scene.', image: 'https://picsum.photos/seed/dubai/800/600', category: 'City', price: 1900, rating: 4.7 },
  { id: '17', name: 'Sedona', country: 'USA', description: 'Arizona desert town surrounded by red-rock buttes and steep canyon walls.', image: 'https://picsum.photos/seed/sedona/800/600', category: 'Nature', price: 1100, rating: 4.8 },
  { id: '18', name: 'Barcelona', country: 'Spain', description: 'Gaudí masterpieces and a vibrant Mediterranean lifestyle.', image: 'https://picsum.photos/seed/barcelona/800/600', category: 'City', price: 1350, rating: 4.7 },
  { id: '19', name: 'Great Barrier Reef', country: 'Australia', description: 'The world\'s largest coral reef system, a diver\'s paradise.', image: 'https://picsum.photos/seed/reef/800/600', category: 'Beach', price: 2400, rating: 4.9 },
  { id: '20', name: 'Florence', country: 'Italy', description: 'The cradle of the Renaissance, home to world-class art.', image: 'https://picsum.photos/seed/florence/800/600', category: 'Culture', price: 1450, rating: 4.8 },
  { id: '21', name: 'Petra', country: 'Jordan', description: 'The famous archaeological site dating to around 300 B.C.', image: 'https://picsum.photos/seed/petra/800/600', category: 'Culture', price: 1200, rating: 4.9 },
  { id: '22', name: 'Paris', country: 'France', description: 'The city of light, romance, and unparalleled gastronomy.', image: 'https://picsum.photos/seed/paris/800/600', category: 'City', price: 1700, rating: 4.8 },
  { id: '23', name: 'Cusco', country: 'Peru', description: 'Once capital of the Inca Empire, now a stunning colonial city.', image: 'https://picsum.photos/seed/cusco/800/600', category: 'Culture', price: 900, rating: 4.7 },
  { id: '24', name: 'Queenstown', country: 'New Zealand', description: 'Global hub for adventure sports and stunning lake views.', image: 'https://picsum.photos/seed/nz/800/600', category: 'Nature', price: 2000, rating: 5.0 },
  { id: '25', name: 'Istanbul', country: 'Turkey', description: 'Where East meets West across the Bosphorus strait.', image: 'https://picsum.photos/seed/istanbul/800/600', category: 'Culture', price: 1050, rating: 4.7 },
  { id: '26', name: 'Phuket', country: 'Thailand', description: 'Clear waters and limestone cliffs of the Andaman Sea.', image: 'https://picsum.photos/seed/phuket/800/600', category: 'Beach', price: 850, rating: 4.6 },
  { id: '27', name: 'Berlin', country: 'Germany', description: 'Edgy art scene, nightlife, and deep 20th-century history.', image: 'https://picsum.photos/seed/berlin/800/600', category: 'City', price: 1150, rating: 4.5 },
  { id: '28', name: 'Grand Canyon', country: 'USA', description: 'Immense canyon carved by the Colorado River in Arizona.', image: 'https://picsum.photos/seed/canyon/800/600', category: 'Nature', price: 900, rating: 4.9 },
  { id: '29', name: 'Rio de Janeiro', country: 'Brazil', description: 'Famous for its beaches, Carnival, and Christ the Redeemer.', image: 'https://picsum.photos/seed/rio/800/600', category: 'City', price: 1400, rating: 4.7 },
  { id: '30', name: 'Edinburgh', country: 'Scotland', description: 'Medieval Old Town and elegant Georgian New Town with gardens.', image: 'https://picsum.photos/seed/edinburgh/800/600', category: 'Culture', price: 1200, rating: 4.8 },
  { id: '31', name: 'Galapagos Islands', country: 'Ecuador', description: 'Unique wildlife and pristine volcanic landscapes.', image: 'https://picsum.photos/seed/galapagos/800/600', category: 'Nature', price: 3200, rating: 5.0 },
  { id: '32', name: 'Seoul', country: 'South Korea', description: 'Neon-lit skyscrapers, pop culture, and ancient palaces.', image: 'https://picsum.photos/seed/seoul/800/600', category: 'City', price: 1550, rating: 4.8 },
  { id: '33', name: 'Mauritius', country: 'East Africa', description: 'Indian Ocean island nation known for beaches and reefs.', image: 'https://picsum.photos/seed/mauritius/800/600', category: 'Beach', price: 2100, rating: 4.8 },
  { id: '34', name: 'Cartagena', country: 'Colombia', description: 'Colorful colonial city on the Caribbean coast.', image: 'https://picsum.photos/seed/cartagena/800/600', category: 'Culture', price: 1000, rating: 4.7 },
  { id: '35', name: 'Lofoten Islands', country: 'Norway', description: 'Dramatic peaks and traditional red fishing cabins.', image: 'https://picsum.photos/seed/lofoten/800/600', category: 'Nature', price: 2300, rating: 4.9 }
];

export const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);

export const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);
