import React, { useState } from 'react';
import GetCats from './Components/GetCats';
import Loadscreen from './Components/Loadscreen';

function App() {
	const [data, setData] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	const logData = () => console.log(data);
	const getCats = (catData) => {
		setData(catData);
		setIsLoading(false);
	};
	const loadscreen = isLoading ? <Loadscreen /> : null;

	return (
		<div>
			<GetCats callback={getCats} />
			{loadscreen}
			<button onClick={logData}>Log Data</button>
		</div>
	);
}

export default App;
