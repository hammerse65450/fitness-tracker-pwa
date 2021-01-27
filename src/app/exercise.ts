import { Category } from './category';
export interface Exercise{
    id: number,
    category: Category;
    name: string;
    lastValue: string,
    imagePath: string,
}