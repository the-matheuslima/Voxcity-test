import { useContext } from 'react';
import { useState } from 'react';
import './App.scss';
import FormLogin from './components/form-login';
import NavBar from './components/navbar';
import { UserContext } from './context/users';

function App() {
  const { usersList, handlerModalLogin, modalLogin } = useContext(UserContext);
  console.log(usersList);
  return (
    <>
      <NavBar />

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
              <tr className='app__table-body'>
                <td className='app__table-dtl'>{user.name}</td>
                <td className='app__table-dtl'>{user.password}</td>
                <td className='app__table-dtl'>{user.cpf}</td>
                <td className='app__table-edit'>🖌️</td>
                <td className='app__table-remove'>🗑️</td>
              </tr>
            ))}
          </table>
        </section>
      </main>
      {modalLogin && <FormLogin />}

    </>
  );
}

export default App;
