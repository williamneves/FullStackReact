import React from 'react';
import Navbar from './components/Navbar';
import PersonForm from './components/PersonForm';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { MDBContainer } from 'mdb-react-ui-kit';

function App() {
	return (
		<React.Fragment>
      <Navbar title={ 'MyApp' } />
      <MDBContainer breakpoint='md'>
			<Routes>
				<Route path='/' element={<PersonForm/>} />
        </Routes>
        </MDBContainer>
		</React.Fragment>
	);
}

export default App;
