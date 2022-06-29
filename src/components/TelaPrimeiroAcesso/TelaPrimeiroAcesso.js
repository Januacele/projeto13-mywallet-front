import logout from '../../assets/images/logout.png';
import plus from '../../assets/images/plus.png';
import menus from '../../assets/images/menus.png';
import styled from 'styled-components';


export default function TelaPrimeiroAcesso(){
    return(
        <> 
            <div>
                <Container>
                    <div className='nomeTela'>
                        <h2>Olá, </h2>
                        <img src={logout} alt="Logo-My Wallet" />
                    </div> 

                    <div className='registros'> 
                        <h5> Não há registros de entrada ou saída </h5>
                    </div>

                    <div className='movimentacao'> 
                        <div className='Entrada_Saida'>
                            <img src={plus} alt="Logo-My Wallet" />
                            <h5> Nova entrada </h5>
                        </div>
                        <div className='Entrada_Saida'> 
                            <img src={menus} alt="Logo-My Wallet" />
                            <h5> Nova saída </h5>
                        </div>
                    </div>

                   

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

    nomeTela{
        display: flex;
        align-items: center;
        justify-content: space-around;

        h2{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 26px;
            color: #FFFFFF;
            margin-top: 25px;
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
        margin-left: 25px;
        margin-top: 78px;
        background: #FFFFFF;
        border-radius: 5px;

        h5{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            text-align: center;
            color: #868686;
        }
    }

   .movimentacao{
        display: flex;
        align-items: center;
        justify-content: space-around;

        .Entrada_Saida {
            position: absolute;
            width: 155px;
            height: 114px;
            left: 25px;
            top: 537px;
            background: #A328D6;
            border-radius: 5px;

                img{
                    width: 21px;
                    height: 21px
                    margin-top: 2px;
                    margin-left: 2px;
                    blendPass: through;
                }

                h5{
                    font-family: 'Raleway';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 17px;
                    line-height: 20px;
                    color: #FFFFFF;
                }
        }
   }

`