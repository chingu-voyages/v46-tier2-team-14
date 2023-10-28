import useRecipe from "../../../hooks/useRecipe";

export default function RecipeMeta() {
  const recipe = useRecipe();
  return (
    <>
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>
    </>
  );
}
