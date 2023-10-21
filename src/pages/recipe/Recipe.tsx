import { useParams } from "react-router-dom";

import useGetRecipe from "../../hooks/useGetRecipe";

export default function Recipe() {
  const { recipeId } = useParams();
  if (recipeId === undefined) throw Error("recipeId required"); // this component will always have recipeId unless accessed outside it's route
  const { isLoading, data, isError, error } = useGetRecipe(recipeId);
  if (isLoading) return <p>loading...</p>;
  if (isError) return <p>{error.message}</p>;
  return (
    <div>
      <h1>{data?.name}</h1>
      <p>{data?.description}</p>
    </div>
  );
}
