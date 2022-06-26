import { ErrorPolicy } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Form(){
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [createSubscriber, {loading}] = useCreateSubscriberMutation();
    
    async function handleSubscribe(event : FormEvent){
        event.preventDefault();
        setErrorMessage('');
        if(!name || !email){
            return setErrorMessage('Todos os campos devem ser preenchidos');
        }
        await createSubscriber({
            variables:{
                name,
                email
            }
        }).then(()=>{
            navigate('/event')
        }).catch(()=>{
            setErrorMessage(`Este email: ${email} já foi cadastrado`);
            setEmail("");
            setName("");
            return;
        })
    } 

    return (
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
            <strong className="text-2xl mb-6 block"> 
                Inscreva-se gratuitamente 
            </strong>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                <input 
                    className="bg-gray-900 rounded px-5 h-14"
                    type="text" 
                    placeholder="Seu nome completo"
                    onChange={event => setName(event.target.value)}
                    value={name}
                />
                <input 
                    className="bg-gray-900 rounded px-5 h-14"
                    type="email" 
                    placeholder="Digite seu e-mail"
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                />
                {errorMessage !== "" && (
                    <p className="text-red-700">{errorMessage}</p>
                )}
                <button
                    type="submit"
                    className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                    disabled ={loading}
                >
                    Garantir minha vaga
                </button>
            </form>
        </div>
    )
}