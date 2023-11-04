import React from 'react';
import s from "./header.module.css"
import HomeIcon from '@mui/icons-material/Home';
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()

    const nav = () => {
        navigate('')
    }

    return (
        <div className={s.box}>
            <HomeIcon onClick={nav} className={s.icon} fontSize={'large'}/>
        </div>
    );
};

export default Header;