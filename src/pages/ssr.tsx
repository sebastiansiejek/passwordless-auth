import User from '../components/User'
import routes from '../routes/routes'
import { getSession, signIn, useSession } from 'next-auth/client'
import { GetServerSidePropsContext } from 'next'

export default function ssr() {
  return (
    <div>
      <h1>{routes.ssr.title}</h1>
      <h2>Your are logged</h2>
      <User />
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      notFound: true,
    }
  }

  return {
    props: {},
  }
}
