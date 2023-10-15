import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const retrievePost = async (postId: number): Promise<Post> => {
  const response = await axios.get<Post>(
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
    </div>
  );
}

export default DisplayPost;
