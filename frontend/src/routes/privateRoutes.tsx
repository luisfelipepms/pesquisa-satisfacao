import { Route } from "react-router-dom";
import Admin from "../pages/Admin";
import PrivateRoute from "./PrivateRoute";
import Layout from "../components/Layout";
import Page1 from "../pages/TestePages/Page1";
import Page2 from "../pages/TestePages/Page2";
import Page3 from "../pages/TestePages/Page3";
import Usuarios from "../pages/Cadastros/Usuarios";
import Clientes from "../pages/Cadastros/Clientes";
import Participantes from "../pages/Cadastros/Participantes";

const privateRouts = (
    <>
        <Route path="/" element={<PrivateRoute />}>
            <Route element={<Layout />}>
            <Route path="cadastros/">
                <Route path="usuarios" element={<Usuarios />}></Route>
                <Route path="clientes" element={<Clientes />}></Route>
                <Route path="participantes" element={<Participantes />}></Route>
            </Route>
            <Route path="home" element={<Admin />} />
            <Route path="page1" element={<Page1 />}></Route>
            <Route path="page2" element={<Page2 />}></Route>
            <Route path="page3" element={<Page3 />}></Route>
            </Route>
        </Route>
    </>
)

export default privateRouts;