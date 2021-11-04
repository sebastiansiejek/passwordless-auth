import Image from 'next/image'
import Loader from 'react-spinners/ClipLoader'
import routes from '../routes/routes'
import type { NextPage } from 'next'
import { signOut, signIn, useSession } from 'next-auth/client'
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
