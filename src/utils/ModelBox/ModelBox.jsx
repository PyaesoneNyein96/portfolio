
import { useDispatch, useSelector } from 'react-redux'
import './ModelBox.css'
import { isOpenMenu, toggleMenu } from '../../features/hamburgerSlice';
import NavList from '../../defaultData/navList'
import { Link } from 'react-router-dom';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

const ModelBox = () => {

    const isOpen = useSelector(isOpenMenu);

    const dispatch = useDispatch();

    const toggle = () => {
        dispatch(toggleMenu());
    }

    const render = <div className="modelBox-wrap md:hidden">
        <div className="model-box mt-10 p-2 rounded-2xl opacity-70 theme pb-10">
            <div className="model-box-top ">
                <div className="close-model text-center text-2xl text-neutral-500 capitalize">Setting</div>
                <ul className="model-box-content text-center text-xl">
                    {Object.entries(NavList).map(([key, l]) =>
                        <li key={key} className='my-5'>
                            <Link className='hover:text-blue-500' to={l.path} onClick={() => toggle()}>
                                {l.name}
                            </Link>
                        </li>
                    )}
                </ul>
                <div className='flex justify-center intems-center'>
                    <span className='mr-5'>
                        Theme
                    </span>
                    <ToggleTheme />
                </div>
            </div>


        </div>
    </div>

    return (
        <>
            {isOpen ? render : ''}
        </>
    )
}

export default ModelBox