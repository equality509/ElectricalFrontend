import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { IndexLoader, ShowLoader } from "./loaders"
import { CreateAction, DeleteAction, UpdateAction } from "./actions"
import Navbar from "./components/Navbar"



const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<div><Navbar/> <App/></div>}>

            <Route path="" element={<Index/>} loader={IndexLoader}/>
            <Route path="post/:id" element={<Show/>} loader={ShowLoader}/>
            <Route path="create" action={CreateAction}/>
            <Route path="update/:id" action={UpdateAction}/>
            <Route path="delete/:id" action={DeleteAction}/>
        </Route>
    </>
))

export default router