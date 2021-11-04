import React from 'react'
import routes from '../../routes/routes'
import Link from 'next/link'

export interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = ({}) => {
  const navs = Object.values(routes)

  return (
    <ul>
      {navs.map(({ path, title }) => {
        return (
          <li key={path}>
            <Link href={path}>{title}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Navbar
