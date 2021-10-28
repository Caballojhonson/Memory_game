import React, { useState } from 'react';
import '../App.css';

export default function Card(props) {
	return <img className="card" onClick={props.onClick} src={props.src} />;
}
