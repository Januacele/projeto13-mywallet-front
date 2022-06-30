import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import Logo from '../../assets/images/MyWallet.png';


export default function TelaCadastro() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const [loading, setLoading] = useState(false);


    async function HandleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        if (password !== repeatedPassword) {
            window.alert("As senhas não correspondem. Tente novamente!");
            setLoading(false);
            return;
        }

        const body = {
            name,
            email,
            password
        };

        try {
            const response = await axios.post("https://localhost:5000/cadastrar", body);
            proximaPagina();
        } catch (e) {
            window.alert("Erro no cadastro. Tente novamente!");
            console.log(e);
            setLoading(false);
        }
    };


    let navigate = useNavigate();

    function proximaPagina() {
        navigate("/");
    }

    return !loading ? (
        <div>
            <Container>
                <div className='logo'>
                    <img src={Logo} alt="Logo-My Wallet" />
                </div>
                <form onSubmit={HandleSubmit}>
                    <input type="name" value={name} onChange={e => setName(e.target.value)} placeholder="Nome" required />
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
                    <input type="senha" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" required />
                    <input type="senhaConfirmada" value={repeatedPassword} onChange={e => setRepeatedPassword(e.target.value)} placeholder="Confirme a senha" required />
                    <button type="submit"> Cadastrar </button>
                </form>
                <Link to="/">
                    <p> Já tem uma conta? Faça Login! </p>
                </Link>
            </Container>
        </div>
    ) : (
        <div>
            <Container>
                <form onSubmit={HandleSubmit}>
                    <div className='logo'>
                        <img src={Logo} alt="Logo-My Wallet" />
                    </div>
                    <input type="nome" value={name} onChange={e => setName(e.target.value)} placeholder="Nome" disabled />
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" disabled />
                    <input type="senha" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" disabled />
                    <input type="senhaConfirmada" value={repeatedPassword} onChange={e => setRepeatedPassword(e.target.value)} placeholder="Confirme a senha" disabled />
                    <button type="submit" className='loading' disabled>
                        <ThreeDots color="FFFFFF" heigth={50} width={50} />
                    </button>
                </form>
                <Link to="/">
                    <p> Já tem uma conta? Faça Login! </p>
                </Link>
            </Container>
        </div>
    );
}


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    img{
        width: 146px;
        height: 50px;
        margin-top: 100px;
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
        margin-left: 14px;
        margin-top: 20px;
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
            margin-left: 12px;
        }
   
    a {
        text-decoration-line: underline;
        cursor: pointer;
    }
    
    p{
        margin-top: 36px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
    }

    .loading{
        opacity: 0.5;
    }
`