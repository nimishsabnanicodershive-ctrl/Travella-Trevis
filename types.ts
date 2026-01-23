
export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  category: 'Nature' | 'City' | 'Beach' | 'Culture';
  price: number;
  rating: number;
}

export interface Itinerary {
  id: string;
  title: string;
  duration: string;
  destination: string;
  activities: string[];
}

export interface User {
  name: string;
  email: string;
}
