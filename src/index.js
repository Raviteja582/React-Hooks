/* Demonstration of Map Method in List of Objects */

import React from 'react';
import ReactDom from 'react-dom';

const names = [
	{
		'id': 582,
		'FirstName': 'RaviTeja',
		'RollNumber': '17211A0582',
		'Branch': 'CSE',
	},
	{
		'id': 581,
		'FirstName': 'Gireesh',
		'RollNumber': '17211A0581',
		'Branch': 'ECE',
	},
	{
		'id': 568,
		'FirstName': 'Nitessh',
		'RollNumber': '17211A0568',
		'Branch': 'EEE',
	}
]

const Book = () => {
	return (
		<div>
			{
				names.map((name,index) => {
					return (
						<Student key={index} name={name} />
					);
				})
			}
			{/* Sending objects as spread operator */}
			{
				names.map((name,index) => {
					return(
						<Student2 key={index} {...name} />
					);
				})
			}
		</div>
	);
}

/* Sending props as object */
const Student = (props) => {
	return (
		<table>
			<tbody>
				<tr>
					<td>Name</td>
					<td>{props.name.FirstName}</td> 
				</tr>
				<tr>
					<td>Roll Number</td>
					<td>{ props.name.RollNumber}</td>
				</tr>
				<tr>
					<td>Branch</td>
					<td>{props.name.Branch}</td>
				</tr>
			</tbody>
		</table>
	)
}
/* Sending object as props using spread operator */
const Student2 = (props) => {
	/* Destructing */
	const { FirstName, RollNumber, Branch } = props
	return (
		<table>
			<tbody>
				<tr>
					<td>Name</td>
					<td>{FirstName}</td>  {/* or props.name.FirstName*/ }
				</tr>
				<tr>
					<td>Roll Number</td>
					<td>{ RollNumber}</td>
				</tr>
				<tr>
					<td>Branch</td>
					<td>{Branch}</td>
				</tr>
			</tbody>
		</table>
	)
}

ReactDom.render(<Book />, document.getElementById('root'));