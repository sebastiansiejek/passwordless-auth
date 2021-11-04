import Image from 'next/image'
import Loader from 'react-spinners/ClipLoader'
import routes from '../routes/routes'
import type { NextPage } from 'next'
import { signOut, signIn, useSession } from 'next-auth/client'

const Home: NextPage = () => {
  const [session, loading] = useSession()

  if (loading) {
    return <Loader />
  }

  if (session?.user) {
    const { user } = session

    return (
      <div>
        <p>
          Hello, {user.name} <a href={`mailto:${user.email}`}>{user.email}</a>
        </p>
        {user.image && <Image width={40} height={40} src={user.image} alt='avatar' />}
        <div>
          <button
            onClick={() =>
              signOut({
                callbackUrl: routes.home.path,
                redirect: false,
              })
            }
          >
            Sign out
          </button>
        </div>
      </div>
    )
  }

  return (
    <button
      onClick={() => {
        signIn()
      }}
    >
      Sign in
    </button>
  )
}

export default Home
