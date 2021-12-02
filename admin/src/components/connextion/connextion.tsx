import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../footer';

import { FormType } from '../../types/_types';
// TODO: add graphql client
// TODO: add auth checking
const Connextion: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormType>();

	return (
		// @ts-ignore
		<div className="d-flex flex-column justify-content-center align-items-center">
			<form onSubmit={handleSubmit((data) => console.log(data))}>
				<div className="form-group my-4">
					{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
					<label className="form-label" htmlFor="Nom" hidden>
						Nom d utilisateur
					</label>
					{/* eslint-disable react/jsx-props-no-spreading */}
					<input
						placeholder="Nom utilisateur"
						aria-placeholder="Nom utilisateur"
						id="Nom"
						className="transparent-input form-control"
						{...register('utilisateur', {
							required: {
								value: true,
								message: 'Ceci est nécessaire',
							},
							maxLength: {
								value: 25,
								message:
									'La longueur doit être inférieure à 25',
							},
							minLength: {
								value: 4,
								message: "La longueur doit être d'au moins 4",
							},
							pattern: {
								value: /^[A-Za-z]+$/i,
								message:
									"Le nom d 'utilisateur ne doit être composé que de lettres",
							},
						})}
					/>
					{errors.utilisateur && (
						<small className="form-text text-danger bg-dark">
							{errors.utilisateur.message}
						</small>
					)}
				</div>
				<div className="form-group my-4">
					{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
					<label className="form-label" htmlFor="MotDePasse" hidden>
						Mot de passe
					</label>

					<input
						placeholder="Mot de Passe"
						aria-placeholder="Mot de Passe"
						id="MotDePasse"
						className="transparent-input form-control"
						{...register('MotDePasse', {
							required: {
								value: true,
								message: 'Ceci est nécessaire',
							},
							maxLength: {
								value: 30,
								message:
									'La longueur doit être inférieure à 30',
							},
							minLength: {
								value: 8,
								message: "La longueur doit être d'au moins 8",
							},
						})}
					/>
					{errors.MotDePasse && (
						<small className="form-text text-danger bg-dark ">
							{errors.MotDePasse.message}
						</small>
					)}
				</div>
				<button
					type="submit"
					className="btn bg-light text-primary rounded-pill w-75  mt-2"
				>
					Connexion
				</button>
			</form>
			<Footer />
		</div>
	);
};
export default Connextion;
