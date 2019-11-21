import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            promo1: "Promo",
            promo2: "Promo",
            partner: "Partnership",
            paket: "Paket & ADD-ON",
            action: "Action",
            another: "Another Action",
            something: "Something Else",
            bantuan: "Pusat Bantuan"
        };
    }
    render() {
        return (
            <div className="header">
                <div className="container warna">
                    <nav className="navbar navbar-expand-lg navbar-light warna">
                        <a className="navbar-brand" href="">
                            <img className="logo" src={require('../logo/logo.png')} alt="logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-lebel="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {this.state.promo1}
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="">{this.state.promo2}</a>
                                        <a className="dropdown-item" href="">{this.state.partner}</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Paket & ADD-ON
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="">{this.state.action}</a>
                                        <a className="dropdown-item" href="">{this.state.another}</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="">{this.state.something}</a>
                                    </div>
                                </li>
                                <li>
                                    <a className="nav-link text-white">{this.state.bantuan}</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Info Terkini
                                </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="">{this.state.promo2}</a>
                                        <a className="dropdown-item" href="">{this.state.partner}</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar;