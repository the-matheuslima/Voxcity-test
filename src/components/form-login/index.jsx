import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/users";
import Form from "../form";

import './style.scss'

function FormLogin() {
    const { AddUser, handlerModalLogin } = useContext(UserContext);

    return (
        <div className="formlogin__container">
            <Form onSubmit={() => AddUser()} activeModal={() => handlerModalLogin()} />
        </div>
    );
}

export default FormLogin;