import React from 'react';

export class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props;
	}

	render() {
		var classes = 'btn';

		if (this.state.value != undefined) {
			
			classes += ' ' + this.state.value;
			
			if (this.state.size != undefined) {
				classes += ' ' + this.state.size; 
			}
		}

		return (
			<div className={classes}>{this.state.value}</div>
		);
	}
}