import Image from 'next/image'
import Loader from 'react-spinners/ClipLoader'
import { signOut, signIn, useSession } from 'next-auth/client'
import routes from '../../routes/routes'

export interface UserProps {}

const User: React.FunctionComponent<UserProps> = ({}) => {
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
        signIn('', {
          callbackUrl: routes.myAccount.path,
          redirect: true,
        })
      }}
    >
      Sign in
    </button>
  )
}

export default User
