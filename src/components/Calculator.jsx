import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from './Button.jsx';
import {Screen} from './Screen.jsx';
import '../scss/styles.scss';

class Calculator extends React.Component {
	
	render() {
		return (
			<div className="main-content">
				<Button value="C"/>
				<Screen />
				<Button value="/"/>
				<Button value="7"/>
				<Button value="8"/>
				<Button value="9"/>
				<Button value="*"/>
				<Button value="4"/>
				<Button value="5"/>
				<Button value="6"/>
				<Button value="-"/>
				<Button value="1"/>
				<Button value="2"/>
				<Button value="3"/>
				<Button value="+"/>
				<Button value="0"/>
				<Button value="."/>
				<Button value="="/>
			</div>
		);
	}
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('main')
);