/* Demonstration of Child Props */

import React from 'react';
import ReactDom from 'react-dom';

const Booklist = () => {
	return (
		<div>
			<Book title="hello World">
				<p style={{marginLeft:'20px',color:'red'}}>This is special</p>
			</Book>
			<Book title="hi world" />
			<Book title="Special world" />
			<Book title="Wonderful world">
				<p style={{marginLeft:'20px',color:'blue'}}>This is special</p>
			</Book>
			<Book title="Danger world" />
		</div>		
	);
}

const Book = (props) => {
	return (
		<div>
			<legend>{props.title}</legend>
			<p>{props.children}</p>
		</div>
	)
}

ReactDom.render(<Booklist />, document.getElementById('root'));