import React from 'react';
import {Outlet} from "react-router-dom";

import './LayoutStyle.css';


const Layout = () => {

    return (
        <div className={'layout'}>
           <Outlet/>
        </div>
    );
};

export default Layout;