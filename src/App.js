
import React from 'react';
import Header from './Header'; // Importe seus componentes
import Contextualizacao from './Contextualizacao';
import Solucao from './Solucao';
import Exemplos from './Exemplos';
import Impactos from './Impactos';
import Desenvolvimento from './Desenvolvimento';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Contextualizacao />
      <Solucao />
      <Exemplos />
      <Impactos />
      <Desenvolvimento />
      <Footer />
    </div>
  );
}

export default App;
