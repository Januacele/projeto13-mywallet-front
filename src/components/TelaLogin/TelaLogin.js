import Logo from '../../assets/images/MyWallet.png';
import styled from 'styled-components';


export default function TelaLogin(){
    return(
        <> 
            <div>
                <Container>
                    <div className='logo'>
                        <img src={Logo} alt="Logo-My Wallet" />
                    </div> 

                    <div className='email'> 
                        <h5>E-mail </h5>
                    </div>

                    <div className='senha'> 
                        <h5>Senha </h5>
                    </div>

                    <div className='entrar'> 
                        <h5>Entrar </h5>
                    </div>

                    <p> Primeira vez? Cadastre-se!</p>
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

    .email{
        width: 326px;
        height: 58px;
        margin-top: 20px;
        background: #FFFFFF;
        border-radius: 5px;
    }
    .senha{
        width: 326px;
        height: 58px;
        margin-top: 12px;
        background: #FFFFFF;
        border-radius: 5px;
    }
    .entrar{
        width: 326px;
        height: 46px;
        margin-top: 12px;
        background: #A328D6;
        border-radius: 5px;

        h5{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            color: #FFFFFF;
            margin-top: 10px;
            margin-left: 136px;
        }
    }

    h5{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        margin-left: 14px;
        margin-top: 20px;
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