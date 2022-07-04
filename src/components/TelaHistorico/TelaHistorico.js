import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import UserContext from '../../contexts/UserContext';
import TokenContext from '../../contexts/TokenContext';
import logout from '../../assets/images/logout.png';
import plus from '../../assets/images/plus.png';
import menus from '../../assets/images/menus.png';


export default function TelaHistorico(){

    const { user } = useContext(UserContext);
    const { token } = useContext(TokenContext);
    const [ transacoes, setTransacoes ] = useState([]);
    const [balanco, setBalanco] = useState(0);


    async function request(config){
        try {
            const response = await axios.get("http://localhost:5000/usuario", config);

            const { movimentacao } = response.data;
            const novoBalanco = response.data.balanco;
            setTransacoes(movimentacao);
            setBalanco(novoBalanco);

        } catch (e) {
            window.alert("Erro na obtenção dos dados");
            console.log(e);
        }
    }

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };

        request(config);

    }, []);

    function configurarNumero(num){
        return num.toFixed(2).replace(".", ",");
    }

    function verificarBalanco(num){
        return num > 0 ? "positivo" : "negativo";
    }

    let navigate = useNavigate();
    function nextPage(page){
        navigate(`/${page}`);
    }

    function renderizarTransacoes(){
        return transacoes.length > 0 ? (
            transacoes.map((t, index) => {
                const { type, valor, descricao, date } = t;

                return (
                    <div className='transacao' key={index}>
                        <div className='container-dia'>
                            <p className='dia'>{date}</p>
                            <p className='texto'>{descricao}</p>
                        </div>
                        <p className={type}>{configurarNumero(valor)}</p>
                    </div>
                );
            })
        ) : (
            <p className='transacoes-vazias'>
                Não há registros de entrada ou saída
            </p>
        );
    }

    return(
                <Container>
                    <header>
                        <p>Olá, {user} </p>
                        <img src={logout} alt="Botão de logout" />
                    </header> 
                    <div className='registros'> 
                        {renderizarTransacoes()}
                       <div className='balanco'>
                            <p> SALDO </p>
                            <p className={verificarBalanco(balanco)}>
                                {configurarNumero(balanco)}
                            </p>
                       </div>
                    </div>

                    <div className='botoes-movimentacao'> 
                        <button onClick={() => nextPage("novaEntrada")}>
                            <img src={plus} alt="Adicionar nova entrada" />
                            <p> Nova entrada </p>
                        </button>
                            
                        <button onClick={() => nextPage("novaSaida")}>
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

    .transacoes-vazias{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

            p{
                font-weight: 400;
                font-size: 20px;
                line-height: 23px;
                text-align: center;
                color: #868686;
            }
    }

    .transacao{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 15px;

        dia{
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #C6C6C6;
            margin-right: 10px;
        }

        texto{
            max-width: 160px;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #000000;
            display: flex;
            align-items: flex-start;
        }
    }

    .transacao .entrada,
    .positivo {
        color: #03AC00;
    }
    .transacao .saida,
    .negativo {
        color: #C70000;
    }

    .transacao .container-dia{
        display: flex;
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

        p:first-of-type{
            font-weight: 700;
            font-size: 17px;
            line-height: 20px;
            color: #000000;
        }

        p:last-of-type {
            font-weight: 400;
            font-size: 17px;
            line-height: 20px;
            text-align: right;
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