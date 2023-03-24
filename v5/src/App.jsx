import styles from './styles/Home.module.css'
import {Link, Redirect, Route, Switch, useParams} from 'react-router-dom'
import usersData from './fake.api'

function Users() {
  return (
    <div>
      <h3>Users Layout</h3>

      <p>
        <Link to="/">Main page</Link>
      </p>

      <Switch>
        <Route path="/users" exact component={UsersListPage}/>
        <Route path="/users/:userId/profile" exact component={UserSinglePage}/>
        <Route path="/users/:userId/edit" exact component={UserEditPage}/>
      </Switch>
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
  const newUserId = +userId + 1

  return (
    <div>
      <h2>Edit User Page</h2>

      <ul>
        <li>
          <Link to={`/users/${userId}/profile`}>User Page</Link>
        </li>
        <li>
          <Link to={`/users/${newUserId}/profile`}>Another User Page</Link>
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

      <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/users/:userId?" component={Users}/>
        <Redirect to="/"/>
      </Switch>
    </main>
  )
}

export default App
