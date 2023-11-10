import Link from 'next/link';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { ActiveLink } from '..';
import { navbarRoutes } from '@/constants';

export const Navbar = () => {
  return (
    <nav className="navbar">

      <Link href={'/'} className='flex items-center'>
        <TravelExploreIcon className='mr-2 ml-6 text-5xl' />
        <label className='text-2xl cursor-pointer'>Wikisaurios</label>
      </Link>
      <div className="flex flex-1"></div>
      {
        navbarRoutes.map( navItem => (
          <ActiveLink key={navItem.path} {...navItem} />
        ))
      }
    </nav>
  )
}