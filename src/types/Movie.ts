export interface Movie {
  id: string;
  title: string;
  description: string;
  genre: string;
  userName: string;
  imageUrl: string;
  createdAt: number;
}

export interface FormData {
  title: string;
  description: string;
  genre: string;
  userName: string;
  image: File | null;
}