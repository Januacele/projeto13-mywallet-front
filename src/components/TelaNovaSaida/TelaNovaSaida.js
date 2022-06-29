import styled from 'styled-components';


export default function TelaNovaEntrada(){
    return(
        <> 
            <div>
                <Container>
                    <div className='nomeTela'>
                        <h2>Nova saída</h2>
                    </div> 

                    <div className='valor'> 
                        <h5> Valor </h5>
                    </div>

                    <div className='descricao'> 
                        <h5> Descrição </h5>
                    </div>

                    <div className='entrada'> 
                        <h5> Salvar saída </h5>
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

    h2{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        color: #FFFFFF;
        margin-top: 25px;
    }

    .valor{
        width: 326px;
        height: 58px;
        margin-top: 40px;
        background: #FFFFFF;
        border-radius: 5px;
    }
    .descricao{
        width: 326px;
        height: 58px;
        margin-top: 12px;
        background: #FFFFFF;
        border-radius: 5px;
    }
    .entrada{
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
            margin-left: 98px;
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

`