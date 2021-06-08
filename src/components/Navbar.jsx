import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import Logo from './Logo';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-navbar bg-gradient">
        <div className="container-fluid container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/sobreNosotros">
                  Quienes somos?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contacto">
                  Contacto
                </a>
              </li>
              <Dropdown>
                <Dropdown.Toggle
                  variant="warning"
                  id="dropdown-basic"
                  className="nav-dropdown"
                >
                  Productos
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Link to="/category/all">
                    <Dropdown.Item href="#/action-1">Todo</Dropdown.Item>
                  </Link>
                  <Link to="/category/consoles">
                    <Dropdown.Item href="#/action-2">Consolas</Dropdown.Item>
                  </Link>
                  <Link to="/category/pc">
                    <Dropdown.Item href="#/action-3">
                      Computadoras Armadas
                    </Dropdown.Item>
                  </Link>
                  <Link to="/category/laptops">
                    <Dropdown.Item href="#/action-4">Laptops</Dropdown.Item>
                  </Link>
                  <Link to="/category/various">
                    <Dropdown.Item href="#/action-5">Varios</Dropdown.Item>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </ul>
            <div className="d-flex mr-5 pr-5">
              <Link to="/">
                <Logo className="logo" />
              </Link>
              <Link to="/">
                <a className="navbar-brand mt-1">CompumundoHiperMegaRed</a>
              </Link>
            </div>
            <Link to="/cart" style={{ textDecoration: 'none' }}>
              <CartWidget />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
