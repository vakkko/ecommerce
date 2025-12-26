import type { Brand } from "../../../../store/services/productApi/productApi.types";

export interface DetailsProps {
  data?: {
    brand?: Brand;
    description?: string;
  };
}
