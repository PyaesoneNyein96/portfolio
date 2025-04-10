import './Navbar.css'
import ToggleTheme from './../../utils/ToggleTheme/ToggleTheme';
import HamburgerMenu from '../../utils/HamburgerMenu/HamburgerMenu';
import NavList from '../../defaultData/navList'
import { Link } from 'react-router-dom';
import ModelBox from '../../utils/ModelBox/ModelBox';

const Navbar = () => {

    return (
        <div className='flex justify-between px-2 pt-2'>

            <div className='flex w-full justify-between'>
                <h1 className='bg-red-200'>
                    {/* Logo */}
                </h1>
                <ul className='text-sm gap-4 m-1 hidden md:flex'>
                    {Object.entries(NavList).map(([key, l]) =>
                        <Link key={key} className='hover:text-blue-500' to={l.path} >
                            {l.name}
                        </Link>
                    )}
                </ul>

                <div className="md:hidden">
                    <ModelBox />
                    <div className="mobile-ui relative">
                        <HamburgerMenu />
                    </div>
                </div>

            </div>
            <div className="hidden md:flex">
                <ToggleTheme />
            </div>




            <div>

            </div>

        </div>
    )
}

export default Navbar