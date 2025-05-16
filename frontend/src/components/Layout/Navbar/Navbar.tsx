import { FaAlignJustify, FaArrowRightFromBracket } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useSidebar } from "../../../contexts/SidebarContext";

export default function Navbar(){
    const navigate = useNavigate();
    const { toggleSidebarCollapsed } = useSidebar();

    function handleLogout(){
        localStorage.removeItem("access_token");
        navigate('/login');
    }

    return(
        <div>
            <nav className="hidden lg:flex navbar">
                <div className="text-white hover:text-gray-300 cursor-pointer">
                    <FaAlignJustify onClick={()=>toggleSidebarCollapsed()}/>
                </div>
                <div className="ml-auto text-white hover:text-gray-300 cursor-pointer">
                    <FaArrowRightFromBracket onClick={() => handleLogout()} />
                </div>
            </nav>
            <nav className="flex lg:hidden navbar">
                <div className="text-white hover:text-gray-300 cursor-pointer">
                    <FaAlignJustify onClick={()=>toggleSidebarCollapsed()}/>
                </div>
                <div className="ml-auto text-white hover:text-gray-300 cursor-pointer">
                    <FaArrowRightFromBracket onClick={() => handleLogout()} />
                </div>
            </nav>
        </div>
        
    )
}