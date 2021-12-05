// @ts-ignore
import React from 'react';
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles/index.sass';

// import Utilisateur from './components/utilisateur/utilisateur';
// import Connexion from './components/connextion/connextion';
import TableauDeBord from './components/tableau-de-bord/tableauDeBord';

const App: React.FC = () => (
	<div className="container-fluid background">
		{/* <Connexion /> */}
		<TableauDeBord />
		{/* <Utilisateur /> */}
	</div>
);

export default App;
