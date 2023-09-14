import React from 'react';
import './assets/css/header.css';

function Header() {
  return (
    <header className="container-fluid mb-4 header-color" id="header">
      <nav className=" container navbar navbar-expand-lg navbar-light bg-transparent">
        <button className="navbar-toggler btn-outline-light" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
          aria-label="Toggle navigation" style={{ backgroundColor: 'rgb(178, 147, 119)' }}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="mx-auto text-center">
            <p className="text-white mb-0 title-page">Challenge IBM</p>
          </div>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item text-white">
              <a className="nav-link text-white" href="#contextualizacao">Contextualização</a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link text-white" href="#solucao">Solução</a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link text-white" href="#exemplos">Exemplo</a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link text-white" href="#impactos">Impactos</a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link text-white" href="#desenvolvimento">Como será desenvolvido</a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link text-white" href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
