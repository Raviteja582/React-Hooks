/* After Clearing the Boiler plater code except index.js */

import React from 'react';
/* After Writing the Component, to Inject the code in component to index.html
   we need to somehow inject to dom. for that we use ReactDom which renders the jsx code 
   return from component into html dom.
*/
import ReactDom from 'react-dom';


function Greeting() {
	return <h4>Hell World, we</h4>
}


/* Creating same component using JSX functions directly */

const Wishing = () => {
	return React.createElement('h1', {}, "hello world");
}

/* Another Exxample for React JSX Underhood*/

function Hello() {
	return (
		<div>
			<h1>Hello World</h1>
		</div>
	);
}

const Hi = () => {
	return (
		React.createElement('div', {}, React.createElement('h1', {}, 'Hi World'))
	)
}

ReactDom.render(<Hi />, document.getElementById('root'));