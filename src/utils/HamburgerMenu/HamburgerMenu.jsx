import './HamburgerMenu.css'
import { isOpenMenu, toggleMenu } from '../../features/hamburgerSlice';
import { useDispatch, useSelector } from 'react-redux';


const HamburgerMenu = () => {

    const dispatch = useDispatch();

    const isOpen = useSelector(isOpenMenu);

    const toggle = () => {
        console.log('run');

        dispatch(toggleMenu());
    }

    return (

        <div className='hamburger-wraper'>
            <input id="checkbox" type="checkbox" onChange={() => toggle()} checked={isOpen} />
            <label className="toggle" htmlFor="checkbox"  >
                <div id="bar1" className="bars bg-amber-800" />
                <div id="bar2" className="bars bg-amber-800" />
                <div id="bar3" className="bars bg-amber-800" />
            </label>
        </div>

    )
}

export default HamburgerMenu
