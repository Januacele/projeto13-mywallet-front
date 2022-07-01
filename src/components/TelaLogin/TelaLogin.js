import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ThreeDots } from "react-loader-spinner";
import styled from 'styled-components';
import { useContext, useState } from "react";
import TokenContext from "../../contexts/TokenContext.js";
import UserContext from "../../contexts/UserContext.js";

export default function TelaLogin() {

    const { setToken } = useContext(TokenContext);
    const { setUser } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);



    async function HandleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        const body = {
            email,
            password
        };

        try {
            const response = await axios.post("http://localhost:5000/login", body);
            console.log(response);

            setToken(response.data.token);
            setUser(response.data.name);

            proximaPagina()

        } catch (e) {
            window.alert("Usuário ou senha inválidos");
            console.log(e);
            setLoading(false);
        }
    }

    let navigate = useNavigate();

    function proximaPagina() {
        navigate("/carteira");
    }

    return !loading ? (
        <Container>
            <h1>My Wallet</h1>
            <form onSubmit={HandleSubmit}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
                <input type="senha" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" required/>
                <button type="submit"> Entrar </button>
            </form>
            <Link to={`/cadastro`}>
                <p> Primeira vez? Cadastre-se!</p>
            </Link>
        </Container>
    ) : (
        <Container>
            <h1>My Wallet</h1>
            <form onSubmit={HandleSubmit}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" disabled />
                <input type="senha" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" disabled />
                <button type="submit" className="loading" disabled> 
                    <ThreeDots color="#FFFFFF" height={50} width={50} />
                </button>
            </form>
            <Link to={"/cadastro"}>
                <p> Primeira vez? Cadastre-se!</p>
            </Link>
        </Container>
    );
}


const Container = styled.div`
    max-width: 375px; 
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        margin: 159px 0 24px 0;
        font-family: 'Saira Stencil One';
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input{
        width: 326px;
        height: 58px;
        margin-top: 20px;
        background: #FFFFFF;
        border-radius: 5px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        padding: 15px;
        margin-bottom: 13px;
        border-style: none;
    }
    
    button{
        width: 326px;
        height: 46px;
        margin-top: 12px;
        background-color: #A328D6;
        border-radius: 5px;
        cursor: pointer; 
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: #FFFFFF;
        border-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }
   
    a {
        text-decoration-line: underline;
        cursor: pointer;
    }
    
    p{
        margin-top: 36px;
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
    }

    .loading {
        opacity: 0.5;
    }
`