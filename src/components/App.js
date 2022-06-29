import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useState } from 'react'
import styled from "styled-components";


import TelaLogin from './TelaLogin/TelaLogin';
import TelaCadastro from './TelaCadastro/TelaCadastro';
import TelaPrimeiroAcesso from './TelaPrimeiroAcesso/TelaPrimeiroAcesso';
import TelaNovaEntrada from './TelaNovaEntrada/TelaNovaEntrada';
import TelaNovaSaida from './TelaNovaSaida/TelaNovaSaida';
import TelaHistorico from './TelaHistorico/TelaHistorico';


export default function App() {
  // const [name, setName] = useState("");

  return (
    <Div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaLogin />}></Route>
          <Route path="/cadastro" element={<TelaCadastro />}></Route>
          <Route path="/primeiroAcesso" element={<TelaPrimeiroAcesso />}></Route>
          <Route path="/novaEntrada" element={<TelaNovaEntrada />}></Route>
          <Route path="/novaSaida" element={<TelaNovaSaida />}></Route>
          <Route path="/historico" element={<TelaHistorico />}></Route>
        </Routes>
      </BrowserRouter>
    </Div >
  );
}

const Div = styled.div`
    background-color: #A328D6;
`;