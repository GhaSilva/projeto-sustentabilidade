import React from 'react';
import './assets/css/style.css';

function Contextualizacao() {
  return (
    <div className="container mb-4" id="contextualizacao">
      <div className="row">
        <div className="col-md-6">
          <div className="contextualizacao_texto">
            <h2 className="border-title">Contextualização do problema</h2>
            <p>Os postes de iluminação são essenciais para garantir a segurança e a visibilidade em áreas públicas durante a noite. 
              No entanto, o uso excessivo de iluminação pode gerar poluição visual, causando efeitos negativos na paisagem urbana, 
              além de desperdiçar energia e aumentar a conta de luz. Além disso, muitas vezes as áreas urbanas ficam iluminadas mesmo quando não há ninguém por perto, o que pode levar a
              um desperdício significativo de energia elétrica e aumento das emissões de gases de efeito estufa.</p>
          </div>
        </div>
        <div className="col-md-6">
          <img src="./assets/imagens/aquecimento_global.png" alt="aquecimento global" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Contextualizacao;
