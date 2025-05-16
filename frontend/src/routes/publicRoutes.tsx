import { Route } from "react-router-dom"
import Login from "../pages/Login";

const publicRoutes = (
    <>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
    </>
)

export default publicRoutes;