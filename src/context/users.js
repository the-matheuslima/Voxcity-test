import { createContext, useEffect, useState } from "react";
import { cpfMask } from "../helpers/maskCpf";
import { verificarCPF } from "../helpers/validate_cpf";
import crud from '../utils/crud-users.json'

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [cpf, setCpf] = useState('');
    const [cpfValidate, setCpfValidate] = useState(false)
    const [usersList, setUserList] = useState(crud);
    const [modalLogin, setModalLogin] = useState(false);


    const handlerName = (nameValue) => {
        setName(nameValue)
    }

    const handlerPassword = (senhaValue) => {
        setPassword(senhaValue);
    }

    const handlerCpf = (cpfValue) => {
        const maskCpf = cpfMask(cpfValue)
        setCpf(maskCpf)
    }

    const handlerModalLogin = () => {
        setModalLogin(!modalLogin)
        console.log(modalLogin);
    }

    const AddUser = (e) => {
        setCpfValidate(verificarCPF(cpf))

        if (name !== '' && name.length >= 3 && password !== '' && password.length >= 8 && cpf !== '' && cpf !== false) {
            const newUser = {
                name: name,
                password: password,
                cpf: cpf
            }
            setUserList([{ ...usersList, ...newUser }])
        }
        else {
            console.log('err');
        }
    }
    console.log(usersList);


    const value = { handlerCpf, handlerPassword, handlerName, name, password, cpf, usersList, handlerModalLogin, modalLogin, AddUser }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
