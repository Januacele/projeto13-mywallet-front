import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useState } from 'react'
import styled from "styled-components";


import TelaLogin from './TelaLogin/TelaLogin';
import TelaCadastro from './TelaCadastro/TelaCadastro';
import TelaPrimeiroAcesso from './TelaPrimeiroAcesso/TelaPrimeiroAcesso';
import TelaCadastroEntrada from './TelaCadastroEntrada/TelaCadastroEntrada';
import TelaCadastroSaida from './TelaCadastroSaida/TelaCadastroSaida';
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
          <Route path="/cadastroEntrada" element={<TelaCadastroEntrada />}></Route>
          <Route path="/cadastroSaida" element={<TelaCadastroSaida />}></Route>
          <Route path="/historico" element={<TelaHistorico />}></Route>
        </Routes>
      </BrowserRouter>
    </Div >
  );
}

const Div = styled.div`
    background-color: #A328D6;
`;