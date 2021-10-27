import React, { useState } from 'react';
import '../App.css'

export default function Card(props) {
	const [isClicked, setIsClicked] = useState(false);

	const toggleBool = () => setIsClicked((prev) => !prev);

	return <img className="card" onClick={props.onClick} src={props.src} />;
}
