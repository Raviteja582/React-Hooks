/* Demonstration of Map Method in List of Objects */

import React from 'react';
import ReactDom from 'react-dom';

const name = [
	{
		'FirstName': 'RaviTeja',
		'RollNumber': '17211A0582',
		'Branch': 'CSE',
	},
	{
		'FirstName': 'Gireesh',
		'RollNumber': '17211A0581',
		'Branch': 'ECE',
	},
	{
		'FirstName': 'Nitessh',
		'RollNumber': '17211A0568',
		'Branch': 'EEE',
	}
]


const Details = name.map((name) => {
	return (
		<div>
			<table style={{border:'2px solid black',margin:'30px'}}>
				<tr>
					<td>Name</td>
					<td>{name.FirstName}</td>
				</tr>
				<tr>
					<td>Roll Number</td>
					<td>{name.RollNumber}</td>
				</tr>
				<tr>
					<td>Branch</td>
					<td>{name.Branch}</td>
				</tr>
			</table>
		</div>
	);
})

const Book = () => {
	return (
		<React.Fragment>
			{/* Directly using in the render state */}
			{name.map((name) => {
				return (
					<div>
						<table style={{ border: '2px solid black', margin: '30px' }}>
							<tr>
								<td>Name</td>
								<td>{name.FirstName}</td>
							</tr>
							<tr>
								<td>Roll Number</td>
								<td>{name.RollNumber}</td>
							</tr>
							<tr>
								<td>Branch</td>
								<td>{name.Branch}</td>
							</tr>
						</table>
					</div>
				);
			})
			}
			{/* Storing in the variable and using in the component */}
			{Details}
		</React.Fragment>
	);
}

ReactDom.render(<Book />, document.getElementById('root'));