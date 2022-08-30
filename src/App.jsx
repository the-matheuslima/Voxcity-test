import { useState } from 'react';
import './App.scss';
import FormLogin from './components/form-loing';
import NavBar from './components/navbar';
import CRUD from './utils/crud-users.json'

function App() {
  const [usersList, setUserList] = useState(CRUD);

  return (
    <>
      <NavBar />

      <main>
        <section className='app__table'>
          <table className='app__table-users'>
            <tr className='app__table-head'>
              <th>Name</th>
              <th>Password</th>
              <th>CPF</th>
            </tr>

            {usersList.users.map((user) => (
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
        <FormLogin />

      </main>
    </>
  );
}

export default App;
