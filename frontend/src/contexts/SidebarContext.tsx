import { createContext, ReactNode, useContext, useState } from "react";

interface SidebarContextType{
    sidebarCollapsed: boolean;
    toggleSidebarCollapsed: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({children}:{children:ReactNode})=>{
    const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);

    const toggleSidebarCollapsed = () =>{
        setSidebarCollapsed(prev => !prev);
    }

    return(
        <SidebarContext.Provider value={{sidebarCollapsed, toggleSidebarCollapsed}}>
            {children}
        </SidebarContext.Provider>
    )
}

export function useSidebar(){
    const context = useContext(SidebarContext);
    if(!context){
        throw new Error('useSidebar deve ser usado dentro de um SidebarProvider')
    }
    return context;
}