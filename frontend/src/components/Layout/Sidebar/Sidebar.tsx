import { Link } from "react-router-dom";

import MenuItem from "./MenuItem";
import { useSidebar } from "../../../contexts/SidebarContext";
import { menuItems } from "../../../config/menu";

export default function Sidebar(){
    const {sidebarCollapsed} = useSidebar();

    return(
        <div>
            <aside className={`hidden lg:flex sidebar transition-all ease-in-out ${sidebarCollapsed?"w-14":"w-52"} h-full`}>
                <div className="logo">
                    <Link to='home'>{sidebarCollapsed?"L":"LOGO"}</Link>
                </div>
                <hr />
                <ul className="pt-7">
                    {menuItems.map((item, idx) => (
                        <MenuItem key={idx} titulo={item.titulo} icon={item.icon} children={item.children} />
                    ))}
                </ul>
            </aside>
            <aside className={`flex lg:hidden sidebar transition-all ease-in-out ${sidebarCollapsed?"w-0":"w-52"} h-full`}>
                <div className="logo">
                    <Link to='home'>{sidebarCollapsed?"L":"LOGO"}</Link>
                </div>
                <hr />
                <ul className="pt-7">
                    {menuItems.map((item, idx) => (
                        <MenuItem key={idx} titulo={item.titulo} icon={item.icon} children={item.children} />
                    ))}
                </ul>
            </aside>
        </div>
    )
}