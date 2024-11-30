// style
import './App.css'
import { useState } from 'react'
// components
import Navbar from './components/navbar/Navbar'
import Fotter from './components/fotter/Fotter'
import Userlist from './components/userList/Userlist'
import NewUser from './components/newuser/NewUser'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [users, setUsers] = useState([])

  // delete user
  const deleteuser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id
      })
    })
  }

  // closeModal

  const closeModal = (e) => {
    if(e.target.className === "overlay") setShowModal(false)
    if(e.key === "Escape") setShowModal(false)
  }

  // Add User
  const addUser = (user) => {
    setUsers((prev) => {
      return [ ...prev, user]
    })
    setShowModal(false)
  }

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className='App'>
      <Navbar usersLength={users.length} />
      <main>
        <div className='no-users'>
          {users.length === 0 && <h2>No Users</h2>}
        </div>
        <Userlist users={users} deleteUser={deleteuser} />
      </main>
      {showModal && <NewUser addUser={addUser} />}
      <button onClick={() => setShowModal(true)} className='create-user'>Create User</button>
      <Fotter />
    </div>
  )
}

export default App


