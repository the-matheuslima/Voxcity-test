import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/users";

function FormLogin() {
    const { handlerCpf, handlerPassword, handlerName, cpf, name, password } = useContext(UserContext);

    return (
        <form>
            <input type="text" minLength='3' name='name' value={name} onChange={(e) => handlerName(e.target.value)} />
            <div>
                <input type="text" minLength='8' name='senha' value={password} onChange={(e) => handlerPassword(e.target.value)} />
                <span><i id="toggler" class="far fa-eye"></i></span>
            </div>
            <input type="text" maxLength="14" name='cpf' placeholder="Digite o seu CPF" value={cpf} onChange={(e) => handlerCpf(e.target.value)} />
        </form>
    );
}

export default FormLogin;