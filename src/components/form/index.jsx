import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/users";

import './style.scss'

function Form({ onSubmit, activeModal }) {
    const { handlerCpf, handlerPassword, handlerName, cpf, name, password } = useContext(UserContext);

    return (
        <form className="form">
            <button onClick={() => activeModal()} className='form-remove'>X</button>
            <div className="form-box">

                <label >
                    Nome:
                    <input className="form-input" required type="text" placeholder="Digite o seu nome" minLength='3' name='name' value={name} onChange={(e) => handlerName(e.target.value)} />
                </label>
                <label >
                    Senha:
                    <input className="form-input" required type="text" placeholder="Digite o sua senha" minLength='8' name='senha' value={password} onChange={(e) => handlerPassword(e.target.value)} />
                </label>

                <label >
                    CPF:
                    <input className="form-input" required type="text" maxLength="14" name='cpf' placeholder="Digite o seu CPF" value={cpf} onChange={(e) => handlerCpf(e.target.value)} />
                </label>

                <button type="button" className="form-add" onClick={() => onSubmit()}>Add user</button>
            </div>
        </form>
    );
}


export default Form;