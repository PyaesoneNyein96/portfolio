import { useLocation } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { toggleMenu } from "../../features/hamburgerSlice";

const RouteWatcher = () => {

    console.log('route swtiched');


    const localion = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleMenu());
    }, [localion.pathname, dispatch]);

    return null;
}

export default RouteWatcher