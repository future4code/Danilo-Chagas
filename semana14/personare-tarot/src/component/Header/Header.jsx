import { ContainerHeader } from "./style";

export default function Header (props) {


    
    return <ContainerHeader>
        {
            !props.gameStatus ? 
            <button
            onClick={()=>props.shuffleCards()}
            >Jogar</button>
            :
            <button
            onClick={()=>props.setGameStatus(false)}
            >Reiniciar</button>
        }
      
    </ContainerHeader>

}