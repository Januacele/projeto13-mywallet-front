import logout from '../../assets/images/logout.png';
import plus from '../../assets/images/plus.png';
import menus from '../../assets/images/menus.png';
import styled from 'styled-components';


export default function TelaPrimeiroAcesso(){
    return(
                <Container>
                    <header>
                        <p>Olá, </p>
                        <img src={logout} alt="Botão de logout" />
                    </header> 

                    <div className='registros'> 
                       <div className='balanco'>
                            <p> SALDO </p>
                       </div>
                    </div>

                    <div className='botoes-movimentacao'> 
                        <button>
                            <img src={plus} alt="Adicionar nova entrada" />
                            <p> Nova entrada </p>
                        </button>
                            
                        <button>
                            <img src={menus} alt="Adicionar nova saída" />
                            <p> Nova saída </p>
                        </button>
                    </div>
                </Container>
    );
}


const Container = styled.div`
    max-width: 375px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 25px 25px 16px 25px;

    header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 22px;

        p{
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            color: #FFFFFF;
        }

        img{
            width: 23px;
            height: 24px
            margin-top: 28px;
            margin-rigth: 10px;
            blendPass: through;
        }
    }
    
    .registros{
        width: 326px;
        height: 446px;
        background-color: #FFFFFF;
        border-radius: 5px;
        padding: 23px 15px 50px 15px;
        position: relative;
        overflow-y: auto;
        overflow-x: hidden;
    }

   .balanco{
        background-color: white;
        position: absolute;
        z-index: 1;
        bottom: 0px;
        padding-bottom: 10px;
        padding-top: 10px;
        width: 296px;
        display: flex;
        justify-content: space-between;

        p{
            font-style: normal;
            font-weight: 700;
            font-size: 17px;
            line-height: 20px;
            color: #000000;
        }
   }

   .botoes-movimentacao{
        margin-top: 13px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        button{
            width: 155px;
            height: 114px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background: #A328D6;
            border-radius: 5px;
            border-style: none;
            font-weight: 700;
            font-size: 17px;
            line-height: 20px;
            color: #FFFFFF;
            opacity: 0.5;
            transition: all 0.3s;     
        }

        button:hover {
            opacity: 1;
            transition: all 0.3s;
        }
   }

`