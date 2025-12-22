export interface ProductImagesProps {
  images: {
    image: string | undefined;
    spotlight: boolean;
    id: string;
  }[];
  description?: string;
}
