import React from 'react';

export class Column extends React.Component {
	render() {
		return (
			<div className="row">
				<Column value="" />
				<Column value="Clear" />
				<Column value="&#60;" />
				<Column value="&#47;" />




				
				<Row className="row ">
				</Row>
				<Row className="">
					<Column value="7" />
					<Column value="8" />
					<Column value="9" />
					<Column value="&#42;" />
				</Row>
				<Row className="">
					<Column value="4" />
					<Column value="5" />
					<Column value="6" />
					<Column value="&#45;" />
				</Row>
				<Row className="">
					<Column value="1" />
					<Column value="2" />
					<Column value="3" />
					<Column value="&#43;" />
				</Row>
				<Row className="">
					<Column value="" />
					<Column value="0" />
					<Column value="&#44;" />
					<Column value="&#61;" />
				</Row>
			</div>
		);
	}
}