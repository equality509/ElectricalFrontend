// import url from "./urls";

// export async function IndexLoader(){
//     const response = await fetch(url)
//     const data = await response.json()

//     console.log("INDEX LOADER:", data)

//     return data
// }

// export async function ShowLoader({params}){
//     const response = await fetch(url + "/" + params.id + "/")
//     const data = await response.json()
//     console.log("SHOW LOADER:", data)
//     return data
// }

import url from "./urls";

interface Post {
  projectName: string;
  location: string;
  numberOfWorkers: number;
  manager: string;
  _id: string;
}

export async function IndexLoader(): Promise<Post[]> {
  const response = await fetch(url);
  const data = await response.json();

  console.log("INDEX LOADER:", data);

  return data;
}

export async function ShowLoader({ params }: { params: { id: string } }): Promise<Post> {
  const response = await fetch(`${url}/${params.id}/`);
  const data = await response.json();
  console.log("SHOW LOADER:", data);
  return data;
}
