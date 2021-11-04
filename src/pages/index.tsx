import type { NextPage } from 'next'
import User from '../components/User'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <User />
    </div>
  )
}

export default Home
