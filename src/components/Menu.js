import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Menu = () => {

    const { slug } = useParams()

    useEffect(() => {
        const trees = window.$('[data-widget="treeview"]');
        trees.Treeview('init');
    }, [])

    return(
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to="/home" className="brand-link">
            <img src="/assets/public/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: ".8"}}/>
            <span className="brand-text font-weight-light">AdminLTE 3</span>
        </Link>

        <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
                <img src="/assets/public/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>
            </div>
            <div className="info">
                <Link to="#" className="d-block">Alexander Pierce</Link>
            </div>
            </div>

            <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item has-treeview menu-open">
                <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                    Customer
                    <i className="right fas fa-angle-left"></i>
                    </p>
                </a>
                <ul className="nav nav-treeview">
                    <li className="nav-item">
                    <Link to="/customer/list" className={`nav-link ${slug == 'list' ? 'active' : ''}`}>
                        <i className="far fa-circle nav-icon"></i>
                        <p>List Customer</p>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/customer/add" className={`nav-link ${slug == 'add' ? 'active' : ''}`}>
                        <i className="far fa-circle nav-icon"></i>
                        <p>Add Customer</p>
                    </Link>
                    </li>
                </ul>
                </li>
            </ul>
            </nav>
        </div>
        </aside>
    );
}

export default Menu;