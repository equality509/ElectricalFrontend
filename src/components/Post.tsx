import { Link } from "react-router-dom";
import "../App.css"

interface PostProps {
  post: {
    _id: string;
    projectName: string;
    location: string;
    numberOfWorkers: number;
    manager: string;
    // Add more properties here
  };
}

const Post = ({ post }: PostProps) => {
  // style
  const div: React.CSSProperties = {
    padding: "40px",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };

  console.log(post._id);

  return (
    <div style={div} className="form-letters">
      <Link to={`/post/${post._id}`}>
        <h1>{post.projectName}</h1>
      </Link>
      {/* <h2 className="background">{post.projectName}</h2> */}
      <h2 className="background">{post.location}</h2>
      <h2 className="background">{post.numberOfWorkers}</h2>
      <h2 className="background">{post.manager}</h2>
    </div>
  );
};

export default Post;
