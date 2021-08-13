import IRecipe from './recipe.interface';

export default interface IRecipeFull extends IRecipe {
  yield: number;
  healthLabels: string[];
  totalWeight: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
}
