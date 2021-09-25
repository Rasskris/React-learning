export default interface IRecipe {
  label: string;
  ingredientLines: string[];
  calories: number;
  mealType: string;
  image: string;
  uri: string;
}
