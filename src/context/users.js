import { createContext, useEffect, useState } from "react";
import { cpfMask } from "../helpers/maskCpf";
import { verificarCPF } from "../helpers/validate_cpf";
import crud from '../utils/crud-users.json'
import { v4 as uuidv4 } from 'uuid'

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [cpf, setCpf] = useState('');
    const [cpfValidate, setCpfValidate] = useState(false)
    const [usersList, setUserList] = useState([]);
    const [modalLogin, setModalLogin] = useState(false);
    const [modalUpdate, setModalUpdate] = useState(false);

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
    }

    const handlerModalUpdate = (id) => {
        setModalUpdate(!modalUpdate)
    }

    const AddUser = (e) => {
        setCpfValidate(verificarCPF(cpf))

        if (name !== '' && name.length >= 3 && password !== '' && password.length >= 8 && cpf !== '') {
            const newUser = {
                name: name,
                password: password,
                cpf: cpf,
                id: uuidv4()
            }
            setUserList([...usersList, { ...newUser }])
            setName('')
            setPassword('')
            setCpf('')
        }
        else {
            console.log('err')
            return;
        }
    }

    const UpdateUser = (id) => {
        setCpfValidate(verificarCPF(cpf))
        usersList.forEach(users => {
            if (users.id === id) {
                if (name !== '' && name.length >= 3 && password !== '' && password.length >= 8 && cpf !== '') {
                    const updateUser = {
                        name: name,
                        password: password,
                        cpf: cpf,
                    }

                    setUserList([{ ...usersList, ...updateUser }])
                    setName('')
                    setPassword('')
                    setCpf('')
                }
                else {
                    console.log('err');
                    return
                }
            }
        })
    }

    console.log(usersList);

    const handlerRemoveUser = (id) => {
        setUserList(usersList.filter((el) => el.id !== id));
    }


    const value = { handlerCpf, handlerPassword, handlerName, name, password, cpf, usersList, handlerModalLogin, modalLogin, AddUser, handlerModalUpdate, modalUpdate, handlerRemoveUser, UpdateUser }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
