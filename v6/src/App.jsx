import styles from './styles/Home.module.css'
import {Link} from 'react-router-dom'

const MainPage = () => {
  return <h2>MainPage</h2>
}

function App() {
  return (
    <main className={styles.main}>
      <h1>App Layout</h1>

      <Link to="/users">Users List Page</Link>
    </main>
  )
}

export default App
