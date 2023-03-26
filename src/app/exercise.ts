import { Category } from './category';
export interface Exercise {
  id?: number;
  categoryId: number;
  name: string;
  lastValue: string;
  imagePath: string;
}
