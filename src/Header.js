import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';
import "./style/Header.css"


class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem className="navigation" ><Link to="/" className="nav-link">Home</Link></NavItem>

        {isAuthenticated && <NavItem className="navigation"><Link to="/profile" className="nav-link">Profile</Link></NavItem>}

        <NavItem className="navigation" ><LoginButton/></NavItem>

        <NavItem className="navigation" ><LogoutButton/></NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    )
  }
}

export default withAuth0(Header);
