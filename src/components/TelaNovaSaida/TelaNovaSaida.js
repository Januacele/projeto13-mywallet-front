import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import TokenContext from '../../contexts/TokenContext';


export default function TelaNovaEntrada(){

    const { token } = useContext(TokenContext);

    const [ valor, setValor] = useState("");
    const [ descricao, setDescricao] = useState("");

    async function request(config, body){
        try {
            await axios.post("http://localhost:5000/usuario", body, config);

            nextPage();
        } catch (error) {
            window.alert("Erro no regristo");
        }
    }


    function HandleSubmit(event){
        event.preventDefault();

        const config = {
            Headers : {
                "Authorization": `Bearer ${token}`
            }
        };

        const formatarValor = parseFloat(valor.replace(",","."));
        console.log(formatarValor);

        const body = {
            type: "saida",
            valor: formatarValor,
            descricao
        }

        request(config, body);
    }

    let navigate = useNavigate();
    function nextPage(){
        navigate("/historico");
    }


    return(
                <Container>
                    <h1>Nova Saída</h1>
                    <form onSubmit={HandleSubmit}>
                        <input type="text" value={valor} onChange={e=> setValor(e.target.value)} placeholder="Valor" required/>
                        <input type="text" value={descricao} onChange={e=> setDescricao(e.target.value)} placeholder="Descricao" required/>
                        <button type="submit"> Salvar Saída </button>
                    </form>
                    <Link to = "/historico">
                        <p> Voltar </p>
                    </Link>
                </Container>
    );
}


const Container = styled.div`
    max-width: 375px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px 25px 0 25px;

    h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        color: #FFFFFF;
        margin: 25px 0 40px 0;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    input{
        width: 326px;
        height: 58px;
        background: #FFFFFF;
        border-radius: 5px;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        padding: 15px;
        margin-bottom: 13px;
        border-style: none;
    }

    button{
        margin-bottom: 36px;
        width: 326px;
        height: 46px;
        background: #A328D6;
        border-radius: 5px;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        border-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    p {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
    }

    .loading {
        opacity: 0.5;
    }

`