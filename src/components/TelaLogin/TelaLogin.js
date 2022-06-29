import { Link, useNavigate } from 'react-router-dom';

import Logo from '../../assets/images/MyWallet.png';
import styled from 'styled-components';


function HandleSubmit(e) {

}


export default function TelaLogin(){
    return(
        <> 
            <div>
                <Container>
                    
                    <div className='logo'>
                        <img src={Logo} alt="Logo-My Wallet" />
                    </div> 

                    <input type="email" placeholder="Email"/>

                    <input type="senha" placeholder="Senha"/>

                    <div>
                        <button onClick={HandleSubmit}> Entrar </button>
                    </div>

                    <Link to={`/cadastro`}>
                        <p> Primeira vez? Cadastre-se!</p>                     
                    </Link>
                    
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