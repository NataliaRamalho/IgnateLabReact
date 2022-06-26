import { Form } from "../components/Form";
import { Logo } from "../components/Logo";
import codeMockupImg from '/src/assets/code-mockup.png'


export function Subscribe(){ 
    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">

                <div className="max-w-[640px]">
                    <Logo/>
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas 
                        e com alta demanda para acessar as melhores oportunidades do mercado
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block"> 
                        Inscreva-se gratuitamente 
                    </strong>
                    <Form/>
                </div>

            </div>

            <img src={codeMockupImg} alt="img" className="mt-10"/>
        </div>
    )
}