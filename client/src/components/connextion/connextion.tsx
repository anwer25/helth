import React, { useState } from 'react';

const test = (a: string, b: string) => {
	console.log(a, b);
};

const Connextion: React.FC = () => {
	const [Nom, definirNom] = useState('');
	const [motDePasse, definirMotDePasse] = useState('');

	return (
		// @ts-ignore
		<form onSubmit={test}>
			<div className="form-group my-4">
				{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
				<label className="form-label" htmlFor="Nom utilisateur" hidden>
					Nom d utilisation
				</label>
				<input
					type="text"
					className="form-control transparent-input"
					id="Nom d utilisateur"
					aria-describedby="Nom"
					placeholder="Nom d utilisateur"
					value={Nom}
					onChange={(event) => definirNom(event.target.value)}
					onBlur={(event) => definirNom(event.target.value)}
				/>
			</div>
			<div className="form-group my-4">
				{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
				<label className="form-label" htmlFor="MotDePasse" hidden>
					Mot de passe
				</label>
				<input
					type="password"
					className="form-control transparent-input"
					id="MotDePasse"
					placeholder="Mot de passe"
					value={motDePasse}
					onChange={(event) => definirMotDePasse(event.target.value)}
					onBlur={(event) => definirMotDePasse(event.target.value)}
				/>
			</div>
			<button type="submit" className="btn btn-primary mt-2">
				Connexion
			</button>
		</form>
	);
};
export default Connextion;
