import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import { ActiveLink } from '..';

const navItems = [
  { path: '/home', text: 'Home' },
  { path: '/carnivorous', text: 'Carnivorous' },
  { path: '/herbivorous', text: 'Herbivorous' },
]

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">

      <Link href={'/'} className='flex items-center'>
        <HomeIcon className='mr-2' />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {
        navItems.map( navItem => (
          <ActiveLink key={navItem.path} {...navItem} />
        ))
      }


    </nav>
  )
}