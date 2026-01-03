
export interface Spec {
  label: string;
  value: string;
  description: string;
}

export interface GalleryItem {
  url: string;
  title: string;
  category: 'Exterior' | 'Interior' | 'Action';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
