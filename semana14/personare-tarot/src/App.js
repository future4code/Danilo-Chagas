import React, { useState, useEffect } from "react";
import { Card } from "./component/Card/Card";
import Header from "./component/Header/Header";
import { ContainerCardList } from "./style"
import { getTarot } from "./services/getTarot";


function App() {

  const [data, setData] = useState({})
  const { imagesUrl, imageBackCard, cards } = data
  const [isLoading, setIsLoading] = useState(false)
  const [suffledCards, setSuffledCards] = useState([])
  const [gameStatus, setGameStatus] = useState(false)
  const [cardWasSelected, setCardWasSelected] = useState(false)

  useEffect(() => {
    getTarot(setIsLoading)
      .then(result => setData(result))

  }, [])

  function shuffleCards() {
    setGameStatus(true)
    setIsLoading(true)
    const cardsPosition = cards.map((item, index) => index)
    const shuffle = cardsPosition.sort((a, b) => 0.5 - Math.random());
    const newArray = []
    shuffle.forEach(item => {
      newArray.push(cards[item])
    })
    setIsLoading(false)
    return setSuffledCards(newArray)
  }

  const displayCards =  cards?.map((item) => {
      return <Card cardStatus={{ cardWasSelected, setCardWasSelected }}
        gameStatus={gameStatus} key={item.name} item={item} src={imagesUrl + item.image} backCard={imageBackCard} />
    })
    
  const displayShuffledCards = suffledCards?.map((item) => {
      return <Card
        key={item.name}
        item={item}
        gameStatus={gameStatus}
        cardStatus={{ cardWasSelected, setCardWasSelected }}
        src={imagesUrl + item.image}
        backCard={imageBackCard} />
    })

  return (
    <React.Fragment>
      <Header
      gameStatus={gameStatus}
      setGameStatus={setGameStatus}
      shuffleCards={shuffleCards} />
      {isLoading ? '...loading' :
        <ContainerCardList>
          {!gameStatus ? displayCards : displayShuffledCards}
        </ContainerCardList>}
    </React.Fragment>

  );
}

export default App;
