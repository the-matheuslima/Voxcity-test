import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import FormLogin from "../../components/form-login";
import FormUpdate from "../../components/form-update";
import { UserContext } from "../../context/users";

import './style.scss'


const Home = () => {
    const { usersList, handlerModalLogin, modalLogin, handlerModalUpdate, modalUpdate, handlerRemoveUser } = useContext(UserContext);
    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = (id) => {
        setSearchParams({ q: id });
        handlerModalUpdate()
    }

    return (
        <>
            <main>
                <section className='app__table'>
                    <div>
                        <button type='button' onClick={() => handlerModalLogin()}>Add User</button>
                    </div>

                    <table className='app__table-users'>
                        <tr className='app__table-head'>
                            <th>Name</th>
                            <th>Password</th>
                            <th>CPF</th>
                        </tr>

                        {usersList.map((user) => (
                            <tr className='app__table-body' key={user.id}>
                                <td className='app__table-dtl'>{user.name}</td>
                                <td className='app__table-dtl'>{user.password}</td>
                                <td className='app__table-dtl'>{user.cpf}</td>
                                <td className='app__table-edit' onClick={() => navigate(user.id)}>🖌️</td>
                                <td className='app__table-remove' onClick={() => handlerRemoveUser(user.id)}>🗑️</td>
                            </tr>
                        ))}
                    </table>
                </section>
            </main>
            {modalLogin && <FormLogin />}
            {modalUpdate && <FormUpdate />}
        </>
    );
};

export default Home;
