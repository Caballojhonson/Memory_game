import React, { useState, useEffect } from 'react';
import Card from './Components/Card';
import GetCats from './Components/GetCats';
import Loadscreen from './Components/Loadscreen';
import Modal from './Components/Modal';
import Retry from './Components/Retry';
import Scoreboard from './Components/Scoreboard';

import './App.css';


function App() {
	const [rawData, setRawData] = useState([]);
	const [currentData, setCurrentData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [catNum, setCatNum] = useState(5);
	const [areClicked, setAreClicked] = useState([]);
	const [scores, setScores] = useState([0]);
  const [highScore, setHighScore] = useState(0);
  

	const shuffle = (array) => {
		let currentIndex = array.length,
			randomIndex;

		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex],
			];
		}

		return array;
	};

  const reset = () => {
    setCatNum(5)
    setAreClicked([]);
    setCurrentData(shuffle(rawData.slice(0, 5)));
    setScores(prev => prev.concat(areClicked.length))
	};

	const checkIfClicked = (key) => {
		if (areClicked.some((item) => item === key)) {
			reset();
		}
	};

  useEffect(() => {
    setHighScore(scores.reduce((a,b) => Math.max(a,b)))
  }, [scores])

	

	const getCats = (apiResponse) => {
		setRawData(apiResponse);
	};

	const cards =
		!isLoading &&
		currentData.map((item) => {
			return (
				<Card
					key={item.id}
					src={item.url}
					onClick={() => handleCardClick(item.id)}
				/>
			);
		});

	useEffect(() => {
		setCurrentData(rawData.slice(0, catNum));
		setIsLoading(false);
	}, [rawData]);

	function handleCardClick(key) {
		setCurrentData(shuffle(rawData.slice(0, catNum)));
		setCatNum((prev) => prev + 1);
		setAreClicked((prev) => prev.concat(key));
		checkIfClicked(key);
	}

	const loadscreen = isLoading ? <Loadscreen /> : null;

	return (
		<div className="main__container">
      <Retry scores={scores}/>
      <Modal />
			<Scoreboard score={areClicked.length} highScore={highScore} />
			<GetCats callback={getCats} />
			{loadscreen}
			{cards}
		</div>
	);
}

export default App;
