import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import styled from "styled-components";
import "./assets/reset/reset.css";

import TelaLogin from './components/TelaLogin/TelaLogin';
import TelaCadastro from './components/TelaCadastro/TelaCadastro';
import TelaNovaEntrada from './components/TelaNovaEntrada/TelaNovaEntrada';
import TelaNovaSaida from './components/TelaNovaSaida/TelaNovaSaida';
import TelaHistorico from './components/TelaHistorico/TelaHistorico';
import TokenContext from "./contexts/TokenContext";
import UserContext from "./contexts/UserContext";

export default function App() {

  const [token, setToken] = useState("");
  const [user, setUser] = useState("");

  return ( 
    <Div>
    <TokenContext.Provider value={{ token, setToken }}>
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaLogin />}></Route>
                    <Route path="/cadastro" element={<TelaCadastro />}></Route>
                    <Route path="/historico" element={<TelaHistorico />}></Route>
                    <Route path="/historico/novaEntrada" element={<TelaNovaEntrada />}></Route>
                    <Route path="/historico/novaSaida" element={<TelaNovaSaida />}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    </TokenContext.Provider>
    </Div >
    );
}

const Div = styled.div`
    background-color: #8C11BE;
    display: flex;
    justify-content: center;
    align-items: center;

    * {
    font-family: 'Raleway';
    box-sizing: border-box;
}
`;