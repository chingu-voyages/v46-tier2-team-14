import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import Instruction from "../components/instruction/Instruction";
import NutritionInfo from "../components/nutrition/Nutrition";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const retrievePost = async (postId: number): Promise<Post> => {
  const response = await axios.get<Post>(
    // this is just a dummy API for setup, will be removed later
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );
  return response.data;
};

function DisplayPost() {
  const { postId } = useParams();
  const {
    data: post,

    isLoading,
  } = useQuery<Post>(
    ["postData", postId],
    () => retrievePost(Number(postId)),
    { enabled: !!postId }, // Only fetch data when postId is available
  );

  if (isLoading) return <div>Fetching post...</div>;

  return (
    <div>
      <h2>Post</h2>
      <h3>{post?.title}</h3>
      <p>{post?.body}</p>
      <NutritionInfo />
      <Instruction />
    </div>
  );
}

export default DisplayPost;

// import  { useState, useEffect } from 'react';
// import NutritionInfo from '../components/nutrition/Nutrition';
// interface Nutrition {
//   updated_at: string;
//   calories: number;
//   carbohydrates: number;
//   fat: number;
//   protein: number;
//   sugar: number;
//   fiber: number;
// }

// interface Instruction {
//   start_time: number;
//   end_time: number;
//   id: number;
//   display_text: string;
//   position: number;
// }

// interface Recipe {
//   id: number;
//   name: string;
//   thumbnail_url: string;
//   description: string;
//   nutrition: Nutrition | null;
//   instructions: Instruction[] | null;
// }

// const RecipeDetail = () => {
//   const [recipe, setRecipe] = useState<Recipe | null>(null);

//   useEffect(() => {
//     const fetchFakeRecipe = async () => {
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       const fakeRecipe: Recipe = {
//         id: 1,
//         name: 'Sample Recipe',
//         thumbnail_url: 'sample-image.jpg',
//         description: 'A delicious sample recipe.',
//         nutrition: {
//           updated_at: '2023-10-22',
//           calories: 350,
//           carbohydrates: 45,
//           fat: 10,
//           protein: 20,
//           sugar: 5,
//           fiber: 6,
//         },
//         instructions: [
//           {
//             start_time: 0,
//             end_time: 15,
//             id: 1,
//             display_text: 'Preheat the oven to 350°F.',
//             position: 1,
//           },
//           {
//             start_time: 15,
//             end_time: 60,
//             id: 2,
//             display_text: 'Mix the ingredients in a bowl.',
//             position: 2,
//           },
//           {
//             start_time: 60,
//             end_time: 90,
//             id: 3,
//             display_text: 'Bake for 30 minutes.',
//             position: 3,
//           },
//         ],
//       };

//       setRecipe(fakeRecipe);
//     };

//     fetchFakeRecipe();
//   }, []);

//   if (!recipe) {
//     return <div>Loading...</div>;
//   }

//   const { name, thumbnail_url, description, nutrition, instructions } = recipe;

//   return (
//     <div>
//       <h2>{name}</h2>
//       <img src={thumbnail_url} alt={name} />
//       <p>{description}</p>

//       {nutrition && <NutritionInfo nutrition={nutrition} />}

//       {instructions && (
//         <div>
//           <h3>Instructions</h3>
//           <ol>
//             {instructions.map((instruction) =>
//               <li key={instruction.id}>{instruction.display_text}</li>
//             )}
//           </ol>
//         </div>
//       )}

//     </div>
//   );
// };

// export default RecipeDetail;
