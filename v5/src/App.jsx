import styles from './styles/Home.module.css'
import {Link, Redirect, Route, Switch} from 'react-router-dom'

function App() {
  function Users() {
    return <h2>users</h2>
  }

  return (
    <main className={styles.main}>
      <h1>Home Page</h1>

      <Link to="/users">Users List Page</Link>

      <Switch>
        <Route exact path="/"/>
        <Route path="/users/:userId?" component={Users}/>
        <Redirect to="/"/>
      </Switch>
    </main>
  )
}

export default App
