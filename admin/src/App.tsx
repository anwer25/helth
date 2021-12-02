// @ts-ignore
import React from 'react';
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles/index.sass';

// import Connextion from './components/connextion/connextion';
import TableauDeBord from './components/tableau-de-bord/tableauDeBord';

const App: React.FC = () => (
	<div className="container-fluid background">
		{/* <Connextion /> */}
		<TableauDeBord />
	</div>
);

export default App;
