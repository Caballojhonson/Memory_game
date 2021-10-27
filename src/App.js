import React, { useState,  } from 'react';
import GetCats from './Components/GetCats';

function App() {
	const [data, setData] = useState('');

	const getCats = (catData) => setData(catData);

	return (
		<div>
			<GetCats callback={getCats} />
		</div>
	);
}

export default App;
