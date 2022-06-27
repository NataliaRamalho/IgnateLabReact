import { createContext, ReactNode, useState } from "react";

interface MenuStatusProps {
    children: ReactNode
}
interface IMenuStatusContext {
    isMenuOpen: boolean,
    handleIsMenuOpen: (newStatus: boolean) => void;
}

const initValue = {
    isMenuOpen: false,
    handleIsMenuOpen: () => {}
}

export const MenuStatusContext = createContext<IMenuStatusContext>(initValue);

export const MenuStatusContextProvider = ({children} : MenuStatusProps) =>{
    const [isMenuOpen, setIsMenuOpen] = useState(initValue.isMenuOpen);

    function handleIsMenuOpen(newStatus: boolean){
        setIsMenuOpen(newStatus)
    }

    return (
        <MenuStatusContext.Provider value={{
            isMenuOpen,
            handleIsMenuOpen,
        }}>
            {children}
        </MenuStatusContext.Provider>
    )
}