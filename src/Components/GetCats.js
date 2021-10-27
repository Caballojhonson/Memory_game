import React, { useEffect } from 'react';

export default function GetCats(props) {
	useEffect(() => {
		apiCall();
	}, []);

	async function apiCall() {
		try {
			fetch(
				'https://api.thecatapi.com/v1/images/search?limit=100&size=small',
				{}
			)
				.then((response) => response.json())
				.then((parsed) => props.callback(parsed));
		} catch (error) {
			throw new Error(error);
		}
	}

	return <div></div>;
}
