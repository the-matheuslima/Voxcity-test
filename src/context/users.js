import { createContext, useState } from "react";
import { cpfMask } from "../helpers/maskCpf";
import { verificarCPF } from "../helpers/validate_cpf";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [cpf, setCpf] = useState('');
    const [cpfValidate, setCpfValidate] = useState(false)

    const handlerName = (nameValue) => {
        setName(nameValue)
    }

    const handlerPassword = (senhaValue) => {
        setPassword(senhaValue);
    }

    const handlerCpf = (cpfValue) => {
        const maskCpf = cpfMask(cpfValue)
        setCpfValidate(verificarCPF(cpfValue))
        setCpf(maskCpf)
    }

    const value = { handlerCpf, handlerPassword, handlerName, name, password, cpf }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
