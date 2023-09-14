import React from 'react';
import './assets/css/footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-5 mb-0 border-0 mt-4" id="faq">
      <div className="container px-0">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-item text-center">
              <img src="./assets/imagens/wpp.png" alt="" />
              <p className="mt-2">+11 988769826</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-item text-center">
              <img src="./assets/imagens/insta.png" alt="" />
              <p className="mt-2">@vinheria_agnello</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-item text-center">
              <img src="./assets/imagens/telefone.png" alt="" />
              <p className="mt-2">4006-9823</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-item text-center">
              <img src="./assets/imagens/email.png" alt="" />
              <p className="mt-2">VinheriaAgnello@hotmail.com</p>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <form className="container" id="myForm">
          <h4 className="text-center">Fale Conosco</h4>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="nome">Nome:</label>
                <input type="text" className="form-control" id="nome" name="nome" required />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" name="email" required />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="idade">Idade:</label>
                <input type="number" className="form-control" id="idade" name="idade" required />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button type="submit" className="btn btn-primary">Enviar</button>
          </div>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
