import { Routes } from "react-router-dom"
import publicRoutes from "./publicRoutes"
import privateRouts from "./privateRoutes"

const AppRoutes = () =>{
    return(
        <Routes>
            {publicRoutes}
            {privateRouts}
        </Routes>
    )
}

export default AppRoutes;