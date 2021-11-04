import User from '../components/User'
import routes from '../routes/routes'
import { signIn, useSession } from 'next-auth/client'

export default function MyAccount() {
  const [session] = useSession()

  if (!session) {
    return (
      <div>
        <h1>My account</h1>
        <h2>You are not logged</h2>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    )
  }
  return (
    <div>
      <h1>{routes.myAccount.title}</h1>
      <User />
    </div>
  )
}
