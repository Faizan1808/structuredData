import React from 'react';
import { Outlet, Link } from "react-router-dom";

// import OrgChartTree from '../components/Header.jsx';

const Layout = () => {
  return (
    <>
    <header>
    <Link  to='/'>Home</Link>
   <Link  to='/compare'>Compare</Link>
        </header>
        <section>
        <Outlet/>
        </section>
        {/* <footer>
            footer content
        </footer> */}
    </>
  );
};

export default Layout;