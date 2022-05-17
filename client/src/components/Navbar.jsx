import React, { useState } from 'react';
import {
	MDBNavbar,
	MDBContainer,
	MDBIcon,
	MDBNavbarNav,
	MDBNavbarItem,
	MDBNavbarLink,
	MDBNavbarToggler,
	MDBNavbarBrand,
	MDBCollapse,
} from 'mdb-react-ui-kit';

export default function ({title}) {
	const [showNavColor, setShowNavColor] = useState(false);

	return (
		<React.Fragment>
			<MDBNavbar expand='lg' light bgColor='light' className='border-bottom border-2 shadow-1 mb-3'>
				<MDBContainer breakpoint='md'>
					<MDBNavbarBrand href='#'>{title}</MDBNavbarBrand>
					<MDBNavbarToggler
						type='button'
						data-target='#navbarApp'
						aria-controls='navbarApp'
						aria-expanded='false'
						aria-label='Toggle navigation'
						onClick={() => setShowNavColor(!showNavColor)}>
						<MDBIcon icon='bars' fas />
					</MDBNavbarToggler>
					<MDBCollapse show={showNavColor} navbar>
						<MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
							<MDBNavbarItem className='active'>
								<MDBNavbarLink aria-current='page' href='#'>
									Home
								</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href='#'>Features</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href='#'>About</MDBNavbarLink>
							</MDBNavbarItem>
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
		</React.Fragment>
	);
}
