import React, { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/users";
import Form from "../form";
import { useSearchParams } from 'react-router-dom'

import './style.scss'

function FormUpdate() {
    const { UpdateUser, handlerModalUpdate } = useContext(UserContext);


    const [useParams] = useSearchParams();

    return (
        <div className="update__container">
            <Form onSubmit={() => UpdateUser(useParams.get('q'))} activeModal={() => handlerModalUpdate()} />
        </div>
    );
}

export default FormUpdate;