import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Form(){
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [createSubscriber, {loading}] = useCreateSubscriberMutation();
    async function handleSubscribe(event : FormEvent){
        event.preventDefault();
        await createSubscriber({
            variables:{
                name,
                email
            }
        })
        navigate('/event')
    } 
    return (
        <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input 
                className="bg-gray-900 rounded px-5 h-14"
                type="text" 
                placeholder="Seu nome completo"
                onChange={event => setName(event.target.value)}
            />
            <input 
                className="bg-gray-900 rounded px-5 h-14"
                type="email" 
                placeholder="Digite seu e-mail"
                onChange={event => setEmail(event.target.value)}
            />
            <button
                type="submit"
                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                disabled ={loading}
            >
                Garantir minha vaga
            </button>
        </form>
    )
}