import React from 'react'
import {Dropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

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
                                <a className="nav-link" href="/">Quienes somos?</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contacto</a>
                            </li>   
                            <Dropdown>
                                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                    Productos
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Link to='/category/all'>
                                        <Dropdown.Item href="#/action-1">Todo</Dropdown.Item>
                                    </Link>                              
                                    <Link to='/category/consoles'>
                                        <Dropdown.Item href="#/action-2">Consolas</Dropdown.Item>
                                    </Link>
                                    {/* <Link to='/category/consoles'>
                                        <Dropdown.Item href="#/action-3">Juegos de Consolas</Dropdown.Item>
                                    </Link> */}
                                    <Link to='/category/pc'>
                                        <Dropdown.Item href="#/action-4">Computadoras Armadas</Dropdown.Item>
                                    </Link>
                                </Dropdown.Menu>
                            </Dropdown>
                        </ul>
                        <div>
                            <Link to='/'><a className="navbar-brand ml-5">CompumundoHiperMegaRed</a></Link>              
                        </div>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-info" type="submit">Search</button>
                        </form>
                    </div>   
                        <CartWidget/>
                </div>             
            </nav>
        </>
    )
}

export default Navbar
