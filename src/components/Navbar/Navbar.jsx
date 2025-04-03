import './Navbar.css'
import ToggleTheme from './../../utils/ToggleTheme/ToggleTheme';

const Navbar = () => {

    const navList = [
        { 'name': 'Home', 'link': '#' },
        { 'name': 'About', 'link': '#' },
        { 'name': 'Feature', 'link': '#' },
        { 'name': 'Setting', 'link': '#' },
    ];


    return (
        <div className='flex justify-between'>

            <div className='flex bg-green-400 w-full justify-between'>
                <h1>
                    {/* Logo */}
                </h1>
                <ul className='text-sm gap-4 bg-red-700 m-1 hidden md:flex'>
                    {navList.map((l, i) =>
                        <li key={i} className=''>
                            {l.name}
                        </li>
                    )}
                </ul>
                <ToggleTheme />
            </div>



            <div>

            </div>

        </div>
    )
}

export default Navbar