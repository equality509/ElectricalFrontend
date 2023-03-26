// import url from "./urls";
// import { redirect } from "react-router-dom";

// export async function CreateAction({ request }) {
//   // get the form data
//   const formData = await request.formData();

//   // construct new todo
//   const newTodo = {
//     projectName: formData.get("projectName"),
//     numberOfWorkers: formData.get("numberOfWorkers"),
//     location: formData.get("location"),
//     manager: formData.get("manager"),
//   };
// console.log(newTodo)
//   // request to create route in backend
//   await fetch(url, {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newTodo),
//   });

//   // redirect back to the index page
//   return redirect("/");
// }

// export async function UpdateAction({ request, params }) {
//     // get the form data
//     const formData = await request.formData();
  
//     // construct new todo
//     const newTodo = {
//       projectName: formData.get("projectName"),
//       numberOfWorkers: formData.get("numberOfWorkers"),
//       location: formData.get("location"),
//       manager: formData.get("manager"),
//     };
  
//     // request to update route in backend
//     await fetch(url + "/" + params.id + "/", {
//       method: "put",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newTodo),
//     });
  
//     // redirect back to the index page
//     return redirect("/");
//   }

//   export async function DeleteAction({params}){
//     //get the id
//     const id = params.id

//     // send request to delete
//     await fetch(url + "/" + id + "/", {
//         method: "delete"
//     })

//     // redirect
//     return redirect("/")
// }

import url from "./urls";
import { redirect } from "react-router-dom";

interface CreateActionProps {
  request: any;
}

interface UpdateActionProps {
  request: any;
  params: { id?: string};
}

interface DeleteActionProps {
  params: { id?: string };
}


export async function CreateAction({ request }: CreateActionProps) {
  // get the form data
  const formData = await request.formData();

  // construct new todo
  const newTodo = {
    projectName: formData.get("projectName"),
    numberOfWorkers: formData.get("numberOfWorkers"),
    location: formData.get("location"),
    manager: formData.get("manager"),
  };
  console.log(newTodo);

  // request to create route in backend
  await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  // redirect back to the index page
  return redirect("/");
}

export async function UpdateAction({ request, params }: UpdateActionProps) {
  // get the form data
  const formData = await request.formData();

  // construct new todo
  const newTodo = {
    projectName: formData.get("projectName"),
    numberOfWorkers: formData.get("numberOfWorkers"),
    location: formData.get("location"),
    manager: formData.get("manager"),
  };

  // request to update route in backend
  await fetch(url + "/" + params.id + "/", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  // redirect back to the index page
  return redirect("/");
}

export async function DeleteAction({ params }: DeleteActionProps) {
  // get the id
  const id = params.id;

  // send request to delete
  await fetch(url + "/" + id + "/", {
    method: "delete",
  });

  // redirect
  return redirect("/");
}
