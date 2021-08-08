import React, { useEffect, useState } from "react";
import { Card } from "./component/Card/Card";
import Header from "./component/Header/Header";
import { getTarot } from "./services/getTarot";
import { ContainerCardList } from "./style"

function App() {

  const [data, setData] = useState({})
  const { imagesUrl, imageBackCard, cards } = data
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getTarot(setIsLoading)
      .then(result => setData(result))

  }, [])

  const displayCards = cards?.map((item) => {
    return <Card key={item.name} item={item} src={imagesUrl+item.image} backCard={imageBackCard} />
  })

  return (
    <React.Fragment>
      <Header/>
      {isLoading ? '...loading' :
        <ContainerCardList>
          {data && displayCards}
        </ContainerCardList>}
    </React.Fragment>

  );
}

export default App;
