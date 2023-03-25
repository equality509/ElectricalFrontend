import { Link, useLoaderData, Form } from "react-router-dom";
import "../App.css"

interface Post {
  _id: string;
  projectName: string;
  location: string;
  numberOfWorkers: number;
  manager: string;
}

const Show = () => {
  const post = useLoaderData() as Post;

  //styles
  // const div = {
  //   textAlign: "center",
  //   border: "3px solid",
  //   width: "40",
  //   margin: "30px auto",
  // };

 
  const div: React.CSSProperties = {
        textAlign: "center",
        border: "3px solid",
        width: "40",
        margin: "30px auto",
      };

  return (
    <div style={div} >
      <h1 className= "show-letters">{post.projectName}</h1>
      <h2 className= "show-letters">{post.manager}</h2>
      
      <div>
        <h2 className= "show-letters">Update this Project</h2>
        <Form action={`/update/${post._id}`} method="post">
          <input className= "form-letters"
            type="text"
            name="projectName"
            placeholder="projectName"
            defaultValue={post.projectName}
          />
          <input className= "form-letters"
            type="text"
            name="location"
            placeholder={post.location}
            defaultValue={post.location}
          />
          <input className= "form-letters"
            type="number"
            name="numberOfWorkers"
            placeholder="numberOfWorkers"
            defaultValue={post.numberOfWorkers}
          />
          <input className= "form-letters"
            type="text"
            name="manager"
            placeholder="manager"
            defaultValue={post.manager}
          />
          <button>Update Car</button>
        </Form>
        <Form action={`/delete/${post._id}`} method="post">
            <button>Delete Car</button>
        </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;


// import { Link, useLoaderData } from "react-router-dom";
// import "../App.css"

// interface Post {
//   _id: string;
//   projectName: string;
//   location: string;
//   numberOfWorkers: number;
//   manager: string;
// }

// const Show = () => {
//   const post = useLoaderData() as Post;

//   //styles
//   const div: React.CSSProperties = {
//     textAlign: "center",
//     border: "3px solid",
//     width: "40",
//     margin: "30px auto",
//   };

 

//   return (
//     <div style={div} >
//       <h1 className= "show-letters">{post.projectName}</h1>
//       <h2 className= "show-letters">{post.manager}</h2>
      
//       <div>
//         <h2 className= "show-letters">Update this Project</h2>
//         <form action={`/update/${post._id}`} method="post">
//           <input className= "form-letters"
//             type="text"
//             name="projectName"
//             placeholder="projectName"
//             defaultValue={post.projectName}
//           />
//           <input className= "form-letters"
//             type="text"
//             name="location"
//             placeholder={post.location}
//             defaultValue={post.location}
//           />
//           <input className= "form-letters"
//             type="number"
//             name="numberOfWorkers"
//             placeholder="numberOfWorkers"
//             defaultValue={post.numberOfWorkers}
//           />
//           <input className= "form-letters"
//             type="text"
//             name="manager"
//             placeholder="manager"
//             defaultValue={post.manager}
//           />
//           <button>Update Car</button>
//         </form>
//         <form action={`/delete/${post._id}`} method="post">
//             <button>Delete Car</button>
//         </form>
//       </div>
//       <Link to="/">
//         <button>Go Back</button>
//       </Link>
//     </div>
//   );
// };

// export default Show;