import { ReactElement, useState } from "react";
import { FaAngleDown, FaAngleRight, FaGear } from "react-icons/fa6";
import { useSidebar } from "../../../contexts/SidebarContext";
import { useLocation, useNavigate } from "react-router-dom";
import { SubItem } from "../../../config/menu";


interface MenuProps {
    titulo: string;
    icon?: ReactElement;
    children?: SubItem[];
}


export default function  MenuItem({titulo, icon, children = []}: MenuProps){
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const [hovered, setHovered] = useState<boolean>(false);
    const {sidebarCollapsed} = useSidebar();
    const navigate = useNavigate();
    const location = useLocation();

    function toggleCollapse(){
        setCollapsed(prev => !prev);
    }

    const handleNavigate = (path: string) =>{
        navigate(path);
    }

    return(
        <div 
            className="relative" 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
            >
            <div className="grid grid-cols-6 p-1 cursor-pointer select-none hover:text-gray-300" onClick={() => toggleCollapse()}>
                <div className={`${sidebarCollapsed?'col-span-6':'col-span-1'} p-1 flex items-center justify-center`}>
                    {icon || <FaGear />}
                </div>
                
                <div className={`col-span-4 p-1 ${sidebarCollapsed?'hidden':'flex'}`}>
                    <span>{titulo}</span> 
                </div>
                <div className={`col-span-1 p-1 ${sidebarCollapsed?'hidden':'flex'} items-center justify-center`}>
                    {collapsed?<FaAngleRight size={'13px'} /> : <FaAngleDown size={'13px'} />}
                </div>
            </div>

            {!sidebarCollapsed && children.length > 0 && (
            <div className={`overflow-hidden transition-all duration-200 ease-in-out ${collapsed ? "max-h-0" : "max-h-40" }`}>
                <div className="pl-9">
                    <ul>
                        {children.map((child, idx)=>{
                            const isActive = location.pathname === child.path;
                            return(
                                <li 
                                    key={idx} 
                                    className={`cursor-pointer hover:text-gray-300 ${isActive ? "text-gray-300":"text-white"}`}
                                    onClick={() => handleNavigate(child.path)}
                                >
                                    {child.label}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            )}

                  {/* Submenu flutuante no hover quando sidebar colapsado */}
            {sidebarCollapsed && hovered && children.length > 0 && (
            <div className="absolute left-full top-0 ml-0 w-40 bg-white rounded shadow-lg p-2 z-10 hidden lg:block">
                <ul className="text-black">
                    {children.map((child, idx) =>(
                        <li 
                            key={idx}
                            className="hover:bg-gray-100 p-1 rounded cursor-pointer" 
                            onClick={() => handleNavigate(child.path)}
                        >
                            {child.label}
                        </li>
                    ))}
                </ul>
            </div>
            )}

        </div>
    )
}