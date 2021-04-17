import React from 'react'
import {Dropdown, Button} from 'react-bootstrap'
import logo from '../Images/logo.jpg'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-warning bg-gradient">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">                           
                            <li className="nav-item">
                                <a className="nav-link" href="#">Quienes somos?</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>   
                            <Dropdown>
                                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                    Productos
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Consolas</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">Juegos de Consolas</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Computadoras Armadas</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </ul>
                        <div>
                            <a className="navbar-brand ml-5" href="#">TecnoPRO</a>              
                        </div>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-info" type="submit">Search</button>
                        </form>
                    </div>
                    <Button variant="warning" className="material-icons md-24 ml-4">shopping_cart</Button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
