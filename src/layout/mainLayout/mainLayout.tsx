import React from 'react';
import Header from "../../components/header/header";
import {Outlet} from "react-router-dom";
import s from "./mainLayout.module.css"
import {Container} from "@mui/material";


const MainLayout = () => {
    return (
        <Container className={s.box}>
            <Header/>
            <Outlet/>
        </Container>
    );
};

export default MainLayout;