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
            document.body.classList.add('dark');

            const themes = document.getElementsByClassName('theme');
            for (let el of themes) {
                el.classList.add('dark-theme');
            }
        } else {
            document.body.classList.remove('dark');

            const themes = document.getElementsByClassName('theme');
            for (let el of themes) {
                el.classList.remove('dark-theme');
            }
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