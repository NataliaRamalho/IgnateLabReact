import { Form } from "../components/Form";
import { Logo } from "../components/Logo";
import codeMockupImg from '/src/assets/code-mockup.png'


export function Subscribe(){ 
    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex lg:flex-row flex-col items-center justify-between mt-20 mx-auto">

                <div className="max-w-[640px]">
                    <div className="flex lg:justify-start justify-center"><Logo/></div>
                    <h1 className="mt-8 lg:text-[2.5rem] text-3xl lg:text-left  text-center leading-tight ml-1 mr-1">
                        Construa uma 
                        <strong className="text-blue-500"> aplicação completa</strong>
                        , do zero, com 
                        <strong className="text-blue-500"> React</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed lg:text-left text-center ml-1 mr-1">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas 
                        e com alta demanda para acessar as melhores oportunidades do mercado
                    </p>
                </div>

                <div className="mt-8">
                    <Form/>
                </div>
            </div>
            <img src={codeMockupImg} alt="img" className="mt-10"/>
        </div>
    )
}