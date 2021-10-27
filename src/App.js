import React, { useState, useEffect } from 'react';
import Card from './Components/Card';
import GetCats from './Components/GetCats';
import Loadscreen from './Components/Loadscreen';

function App() {
	const [rawData, setRawData] = useState([]);
  const [currentData, setCurrentData] = useState([])
	const [isLoading, setIsLoading] = useState(true);
  const [catNum, setCatNum] = useState(5)

  const shuffle = (array) => {
    let currentIndex = array.length, randomIndex

    while(currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }

    return array
  }

	const getCats = (apiResponse) => {
		setRawData(apiResponse);
	};

  const cards = !isLoading && currentData.map((item) => {
    return <Card src={item.url} onClick={handleCardClick} />;
  });

  useEffect(() => {
    setCurrentData(rawData.slice(0, catNum))
    setIsLoading(false);
  }, [rawData])


  function handleCardClick() {
    setCurrentData( shuffle(rawData.slice(0, catNum)) )
    setCatNum((prev) => prev + 1)
  }

	const loadscreen = isLoading ? <Loadscreen /> : null;

	return (
		<div>
			<GetCats callback={getCats} />
			{loadscreen}
			{cards}
		</div>
	);
}

export default App;
