import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
`
export const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 5%;
    width: 90%;

    border-bottom: 1px solid lightgray;

    #img{
        width: 1em;
        height: 1em;
        background-image: url(${(props)=>props.img});
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
        border-radius: 50%;


    }
`

export const CardProfile = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap:0.5em;
    width: 25%;
    height: 90%;
    border: 1px solid lightgray;
    box-shadow: 1px 1px 5px;
    border-radius: 10px;
    overflow: hidden;

    .container-top-buttons{
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 10%;
            background-color: #ffffff73;
            overflow: hidden;
        }

    #button-refresh{
            width: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;   
            background: none;
            border: none;            
            padding: 0 5%;
            color: #003b00;
            font-size: 1.5em;
            :hover,:focus{
                    background-color: #003b003e;
                    transform: scale(1.1);
                    cursor: pointer;
                    :after{
                        font-size: 0.6em;
                        content: " reiniciar";
                    }
                }
        }

        #button-choose{
            width: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;   
            background: none;
            border: none;                
            padding: 0 5%;
            color: #af0000;
            font-size: 1.5em;
            :hover,:focus{
                    color: #af0000;
                    background-color: #ff000030;
                    transform: scale(1.1);
                    cursor: pointer;
                    :after{
                        font-size: 0.6em;
                        content: " ver perfis";
                    }   
                }
        }
    @media (max-device-width: 414px) {
        width: 90vw;
    }
`