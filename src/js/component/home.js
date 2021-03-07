import React from "react";

import { Sticks } from "./stick.js";
import { Lights } from "./light.js";

//create your first component
export function Home() {
	return (
		<div>
			<Sticks />
			<Lights />
		</div>
	);
}
