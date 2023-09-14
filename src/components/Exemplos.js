import React from 'react';
import './assets/css/style.css';


function Exemplos() {
  return (
    <div className="exemplos_postes text-center container contextualizacao_texto mb-4" id="exemplos">
      <h2 className="mb-4 border-title">Exemplos de iluminação com e sem pedestres</h2>
      <div className="exemplos_imagens">
        <div className="row">
          <div className="col-md-6 mb-4">
            <img className="exemplos_imagem img-fluid" src="./assets/imagens/poste_noite.jpg" alt="imagem poste com intensidade alta" style={{ width: '500px', height: '400px' }} />
          </div>
          <div className="col-md-6">
            <img className="exemplos_imagem img-fluid" src="./assets/imagens/poste_tarde.jpg" alt="imagem poste com intensidade baixa" style={{ width: '500px', height: '400px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exemplos;
