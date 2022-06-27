import { List, X } from "phosphor-react";
import { useContext } from "react";
import { MenuStatusContext } from "../context/MenuStatusContext";
import { Logo } from "./Logo";

export function Header(){
    const {isMenuOpen, handleIsMenuOpen} = useContext(MenuStatusContext)
    return (
        <header className="w-full py-5 flex items-center  bg-gray-700 border-b border-gray-600">
                <div className="lg:w-full basis-5/6 flex justify-center">
                    <Logo/>
                </div>
                <div className="lg:hidden visible basis-1/5 flex justify-end md:mr-6 mr-2">
                    <button className="space-y-2" onClick={() => {handleIsMenuOpen(!isMenuOpen)}}>
                        {isMenuOpen ? <X size={32}/> : <List size={32}/>}
                    </button>
                </div>
        </header>
    )
}