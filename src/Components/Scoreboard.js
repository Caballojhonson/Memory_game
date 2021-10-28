import React from 'react';

export default function Scoreboard(props) {
	return (
		<header className="score__container">
			<h3>Score: {props.score}</h3>
			<h3>Highest score: {props.highScore}</h3>
		</header>
	);
}
