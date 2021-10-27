import React, { useState } from 'react';
import Card from './Components/Card';
import GetCats from './Components/GetCats';
import Loadscreen from './Components/Loadscreen';

function App() {
	const [data, setData] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	const getCats = (apiResponse) => {
		setData(apiResponse);
		setIsLoading(false);
	};
	const cards = isLoading
		? null
		: data.map((item) => {
				return <Card src={item.url} />;
		  });
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
