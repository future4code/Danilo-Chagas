import { useEffect, useState } from "react";
import { getTarot } from "./services/getTarot";
function App() {

  const [data, setData] = useState({})
  const {imagesUrl, imageBackCard, cards} = data
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(()=>{
    getTarot(setIsLoading)
    .then(result => setData(result))
    
  },[])
  
  return (
    <div>
      {console.log(imagesUrl)}
      {isLoading ? '...loading' : 'Tarot'}
    </div>

  );
}

export default App;
