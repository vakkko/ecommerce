export interface ImageInterface {
  image: string | undefined;
  spotlight: boolean;
  id: string;
}

export interface ProductImagesProps {
  images: ImageInterface[];
  description?: string;
}
