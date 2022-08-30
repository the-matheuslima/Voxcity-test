import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/users";

import './style.scss'

function FormLogin() {
    const { handlerCpf, handlerPassword, handlerName, cpf, name, password, handlerModalLogin, AddUser } = useContext(UserContext);

    return (
        <div className="formlogin__container">
            <form className="formlogin__form">
                <button onClick={() => handlerModalLogin()} className='formlogin__form-remove'>X</button>
                <div className="formlogin__form-box">

                    <label >
                        Nome:
                        <input className="formlogin__form-input" required type="text" placeholder="Digite o seu nome" minLength='3' name='name' value={name} onChange={(e) => handlerName(e.target.value)} />
                    </label>
                    <label >
                        Senha:
                        <input className="formlogin__form-input" required type="text" placeholder="Digite o sua senha" minLength='8' name='senha' value={password} onChange={(e) => handlerPassword(e.target.value)} />
                    </label>

                    <label >
                        CPF:
                        <input className="formlogin__form-input" required type="text" maxLength="14" name='cpf' placeholder="Digite o seu CPF" value={cpf} onChange={(e) => handlerCpf(e.target.value)} />
                    </label>

                    <button type="button" className="formlogin__form-add" onClick={(e) => AddUser(e)}>Add user</button>
                </div>
            </form>
        </div>
    );
}

export default FormLogin;