// import React, { useState } from 'react'
import './ToggleTheme.css'
import { toggleTheme, isDark, theme } from '../../features/themeSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Day from '../../../public/summer.png'
import Night from '../../../public/night.png'
import System from '../../../public/operational-system.png'



const ToggleTheme = () => {


    const is_dark = useSelector(isDark);
    const Theme = useSelector(theme);

    const dispatch = useDispatch();

    const setTheme = () => {
        dispatch(toggleTheme());
    }

    useEffect(() => {


        if (is_dark) {
            // document.documentElement.classList.add('dark');
            document.getElementsByTagName('body')[0].classList.add('dark');
        } else {
            // document.documentElement.classList.remove('dark');
            document.getElementsByTagName('body')[0].classList.remove('dark');
        }
    }, [is_dark]);


    return (


        <div onClick={() => setTheme()}>

            <div className="like-button">
                <img
                    src={Theme == 2 ? System : (Theme == 1 ? Night : Day)}
                    alt="Theme Icon"
                    className="theme-icon"
                />
            </div>

        </div>


    )
}

export default ToggleTheme