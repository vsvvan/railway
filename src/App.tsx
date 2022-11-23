import React, { useState } from 'react';
import './App.css';
import { SearchBar } from "./SearchBar";
import { Header } from "./Header";
import { TrainConnections } from "./TrainConnections";
import ConInfo from "./ConInfo";

function App() {
	const [Connections, setConnections] = useState<ConInfo>({
		from: '',
		to: '',
		month: 0,
		day: 0,
		hour: 0,
		minute: 0
	})

	return (
		<div className="App">
			<Header />
			{SearchBar({dispatch: setConnections})}
			{(Connections.from.length > 0 && Connections.to.length > 0) && <TrainConnections /> }
		</div>
	);
}

export default App;
