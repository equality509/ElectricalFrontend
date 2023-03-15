import { useLoaderData, Form } from "react-router-dom";
import Post from "../components/Post";
import "../App.css"

interface Todo {
  id: number;
  projectName: string,
  location: string,
  numberOfWorkers: number,
  manager: string,
}

const Index: React.FC = (props) => {
  const todos: Todo[] = useLoaderData() as Todo[];

  return <>
   <h2 className='title'>Post Your Job</h2>
   <div className="flx">
  <div style={{textAlign: "center"}} className="frm">
     
      <Form action="/create" method="post" >
          <input type="text" name="projectName" placeholder="projectName" />
          <input type="text" name="location" placeholder="location"/>
          <input type="number" name="numberOfWorkers" placeholder="numberOfWorkers"/>
          <input type="text" name="manager" placeholder="manager"/>
          <button>Create New Car</button>
      </Form>
  </div>
  <div className = "car"> 
  {todos.map((post) => <Post key={post.id} post={post} />)}
  </div>
  </div>

  </>;
};

export default Index;


// import { useLoaderData, Form } from "react-router-dom";
// import Post from "../components/Post";
// import "../App.css"

// const Index = (props) => {
//   const todos = useLoaderData();

//   // Check if `todos` is an array before calling `map()`
//   if (Array.isArray(todos)) {
//     return (
//       <>
//         <h2 className='title'>Post Your Car</h2>
//         <div className="flx">
//           <div style={{textAlign: "center"}} className="frm">
//             <Form action="/create" method="post" encType="multipart/form-data" className="frm">
//               <input type="text" name="make" placeholder="make" className="background"/>
//               <input type="text" name="model" placeholder="model"/>
//               <input type="text" name="year" placeholder="year"/>
//               <input type="text" name="color" placeholder="color"/>
//               <input type="text" name="price" placeholder="price"/>
//               <input type="file" name="image" placeholder="image"/>
//               <button>Create New Car</button>
//             </Form>
//           </div>
//           <div className = "car"> 
//             {todos.map((post) => <Post key={post.id} post={post} />)}
//           </div>
//         </div>
//       </>
//     );
//   } else {
//     return <div>Loading...</div>;
//   }
// };

// export default Index;