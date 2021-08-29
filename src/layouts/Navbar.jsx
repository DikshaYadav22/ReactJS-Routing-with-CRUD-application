import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';


const NavHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="nav-design" expand="md">
                <NavbarBrand href="/" className="logo">React Users</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" exact to="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                        </NavItem>

                    </Nav>
                    <NavLink className="btn btn-danger" to="/addUser">Add Users</NavLink>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavHeader;