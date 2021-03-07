import React, { useState } from "react";

export function Lights() {
	const white = "#fff";

	const [Glow, SetGlow] = useState("false");

	let boxStyles = {
		background: "black",
		height: "180px",
		width: "80px",
		margin: "auto",
		borderRadius: "10px"
	};

	let lightStylesred = {
		height: "60px",
		width: "60px",
		background: "red",
		margin: "auto",
		borderRadius: "100%",
		boxShadow: `0 0 10px 10px ${white}`
	};

	let lightStylesyellow = {
		height: "60px",
		width: "60px",
		background: "yellow",
		margin: "auto",
		borderRadius: "100%"
	};
	let lightStylesgreen = {
		height: "60px",
		width: "60px",
		background: "green",
		margin: "auto",
		borderRadius: "100%"
	};

	function ChangeColor() {
		SetGlow("yellow");
	}

	return (
		<div style={boxStyles}>
			<div style={lightStylesred} onClick={ChangeColor}></div>
			<div style={lightStylesyellow}></div>
			<div style={lightStylesgreen}></div>
		</div>
	);
}
