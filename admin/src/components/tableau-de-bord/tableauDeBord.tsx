import React from 'react';
// import { Link } from 'react-router-dom';
import utilisateurs from '../../images/icons/group-of-users 1.svg';
import patient from '../../images/icons/user 1.svg';
import sale from '../../images/icons/salle 1.svg';
import journaux from '../../images/icons/Technology_Notepad_1 copy 5 1.svg';
import Footer from '../footer';
import Header from '../header';

// TODO: add add Link on every col and then add to it class Name (stretched-link)
// TODO: add padding to h5 where the Name is

const TableauDeBord: React.FC = () => (
	<div className="container d-flex flex-column justify-content-center align-items-center text-center min-vh-100">
		<Header />
		<div className="row">
			<div className="col">
				<div
					className="card card-radius card-transparent"
					style={{ width: '11rem' }}
				>
					<img
						className="card-img-top"
						src={utilisateurs}
						alt="utilisateurs"
					/>
					<div className="card-body">
						<h5 className="card-title">Utilisateurs</h5>
					</div>
				</div>
			</div>
			<div className="col">
				<div
					className="card card-radius card-transparent"
					style={{ width: '11rem' }}
				>
					<img className="card-img-top" src={patient} alt="patient" />
					<div className="card-body">
						<h5 className="card-title">Patient</h5>
					</div>
				</div>
			</div>
			<div className="col">
				<div
					className="card card-radius card-transparent"
					style={{ width: '11rem' }}
				>
					<img className="card-img-top" src={sale} alt="sale" />
					<div className="card-body">
						<h5 className="card-title">Sale</h5>
					</div>
				</div>
			</div>
			<div className="col">
				<div
					className="card card-radius card-transparent"
					style={{ width: '11rem' }}
				>
					<img
						className="card-img-top"
						src={journaux}
						alt="journaux"
					/>
					<div className="card-body">
						<h5 className="card-title">Journaux</h5>
					</div>
				</div>
			</div>
		</div>
		<Footer />
	</div>
);

export default TableauDeBord;
