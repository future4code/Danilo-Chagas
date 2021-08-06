import { useEffect, useState } from "react";
import { Card } from "./component/Card/Card";
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
    return <Card item={item} src={imagesUrl+item.image} />
  })

  return (
    <div>
      {isLoading ? '...loading' :
        <ContainerCardList>
          {data && displayCards}
        </ContainerCardList>}
    </div>

  );
}

export default App;
