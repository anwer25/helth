import React from 'react';

const Header: React.FC = () => (
	// TODO: add pass user name using hooks
	<header className="fixed-top">
		<nav className="nav justify-content-center">
			<div className="w-25 bg-light d-flex justify-content-between rounded-3 mt-2 align-items-center">
				<h3>hello world</h3>
				<div className="">
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label */}
					<button
						className="nav-link dropdown-toggle justify-content-start btn"
						id="navbarDropdown"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					/>
					<ul
						className="dropdown-menu me-md-5"
						aria-labelledby="navbarDropdown"
					>
						<li>
							{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
							<button className="dropdown-item" type="button">
								Déconnecter
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
);

export default Header;
