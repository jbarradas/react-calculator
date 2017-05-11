import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from './Button.jsx';

class Calculator extends React.Component {
	constructor() {
		super();
		this.setState({
			value: props.value
		});
	}
	componentWillMount() {
		console.log("wi  ll")
	}

	render() {
		return (
			<div className="main-content">
				<Button value="6"/>
			</div>
		);
	}
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('main')
);