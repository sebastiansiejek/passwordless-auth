import { Session } from 'next-auth'
import { signIn, signOut, useSession } from 'next-auth/client'
import User from '../components/User'

interface MyAccountProps {
  session: Session
}

export default function MyAccount() {
  const [session] = useSession()

  if (!session) {
    return (
      <div>
        <h1>You are not logged</h1>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    )
  }
  return <User />
}
