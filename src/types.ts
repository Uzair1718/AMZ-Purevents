export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  details: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}