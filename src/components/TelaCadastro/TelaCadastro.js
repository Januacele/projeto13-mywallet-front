import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Logo from '../../assets/images/MyWallet.png';
import styled from 'styled-components';


export default function TelaCadastro(){


    function HandleSubmit() {

        const navigate = useNavigate();
        const URL = `https://localhost:5000/`;

        axios.post(URL, usuario).then(res => {
            console.log(res)
            setTimeout(()=>{
                navigate("/")
            }, 1500)
        }).catch(err => {
            console.log(err.response);
        });
    }

    return(
        <> 
            <div>
                <Container>
                    <form onSubmit={HandleSubmit}>
                        <div className='logo'>
                            <img src={Logo} alt="Logo-My Wallet" />
                        </div> 

                        <input type="nome" placeholder="Nome"/>

                        <input type="email" placeholder="Email"/>

                        <input type="senha" placeholder="Senha"/>

                        <input type="senhaConfirmada" placeholder="Confirme a senha"/>

                        <div>
                            <button onClick={HandleSubmit}> Cadastrar </button>
                        </div>

                        <Link to={`/`}>
                            <p> Já tem uma conta? Faça Login! </p>                     
                        </Link>
                    </form>
                </Container>
               
            </div>
        </>
    );
}


const Container = styled.div`
    width: 100%;
    height: 100%;
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
`