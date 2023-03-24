import styles from './styles/Home.module.css'
import {Link, Route, useParams, Routes, Navigate, Outlet} from 'react-router-dom'
import usersData from './fake.api'

function Users() {
  return (
    <div>
      <h3>Users Layout</h3>

      <p>
        <Link to="/">Main page</Link>
      </p>

      <Outlet/>
    </div>
  )
}

function UsersListPage() {
  return (
    <div>
      <h3>Users List Page</h3>

      <ul>
        {usersData.map(user => {
          return (
            <li key={user._id}>
              <Link to={`/users/${user._id}/profile`}>{user.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function UserSinglePage() {
  const {userId} = useParams()

  return (
    <div>
      <h3>User Page</h3>

      <ul>
        <li>
          <Link to="/users">Users List Page</Link>
        </li>
        <li>
          <Link to={`/users/${userId}/edit`}>Edit User Page</Link>
        </li>
      </ul>

      <p>
        {`UserId: ${userId}`}
      </p>
    </div>
  )
}

function UserEditPage() {
  const {userId} = useParams()
  const userIdConcat = +userId + 1

  return (
    <div>
      <h2>Edit User Page</h2>

      <ul>
        <li>
          <Link to={`/users/${userId}/profile`}>User Page</Link>
        </li>
        <li>
          <Link to={`/users/${userIdConcat}/profile`}>Another User Page</Link>
        </li>
        <li>
          <Link to="/users">Users List Page</Link>
        </li>
      </ul>
    </div>
  )
}

const MainPage = () => {
  return <h2>MainPage</h2>
}

function App() {
  return (
    <main className={styles.main}>
      <h1>App Layout</h1>

      <Link to="/users">Users List Page</Link>

      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path="users" element={<Users/>}>
          <Route index element={<UsersListPage/>}/>
          <Route path=":userId">
            <Route path="profile" element={<UserSinglePage/>}/>
            <Route path="edit" element={<UserEditPage/>}/>
          </Route>
        </Route>

        <Route path="*" element={
          <Navigate to="/"/>
        }/>
      </Routes>
    </main>
  )
}

export default App
