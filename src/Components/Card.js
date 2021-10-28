import React from 'react';

export default function Card(props) {
	return <img className="card" onClick={props.onClick} src={props.src} alt="" />;
}
