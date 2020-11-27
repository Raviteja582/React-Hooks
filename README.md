Every Compnent is created from the module 
	import React from 'react';
First Component:
	To Differentiate a normal funtion and component in React:
		--> We must captilaize the First Character to represent the Component
		--> Normal funtion has small letter for funtion name

ReactDom:
    import ReactDom from 'react-dom';
    ReactDom.render(Componnt,document.getElementById('root'));
	
	It normally inserts the jsx code returned from the component to dom root element.


Underhood of JSX:
	<div>
		<h1> Hello World </h1>
	<div>

Same as:
	React.createElement('div',{},React.createElement('h1',{},'Hello World'))

code:

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

JSX RULES:

-> Return Single Element div / section / article or Fragment
	but instead of returning everything in div we can use section(<section>) or article(<article>) or React Fragment as
	<React.Fragment> 
		....
		....
	</React.Fragment>
	
	or simple
	<>
		....
		....
	</>

-> Use camel case for html Attributes like onClick and for class use className.
-> Close Every Element like img and input

Props Destructing:

	const Comp1 = (props) = {
		const {var1,var2,var3} = props;
	}
	cosnt Comp1 = ({var1,var2,var3}) = {
	}

Props Children:
	<Comp1 var1={} var2={} var3={}>
	//Childer content should go between starting and closing tag of component.
	<p>Hello World</p>
	</Comp>

	in Comp1 component the props object recieve the special info between opening and closing tagas children property. i.e props.children

Spread Operator:
	when sending props objects to the component, we access them in component as props.obj.var1, props.obj.var2, ......... so on.
	So in this situation we can destructure with in component using
		in main component 
			<Comp1 obj={obj} />
		const {var1,var2,var3,.......} = props.obj
	But before sending the object to props we can destructure within the main component using spread operator, i.e .,
	<Comp1 {...obj} />
	in Comp1 we use this as:
		const {var1,var2,var3,.......}=props

Event Basics:
	
	we can write events declaration using inline funtions as onClick={() => {...}}
	or define funtion outside of return statement and declare in event name i.e onClick ={ () =>functionName()}

Export and Import:
	Here when we use only with 'export' keyword then it is named export i.e., only use name which is same as name in the export file otherwise it throws error.
	But when we use with 'export default' then we can use custome name in the import file.
	Note:
		Only one Default Export should be present in the file.
		Multiple named export statements can be allowed in a file.


ADVANCED REACT CODE:

1.useState:-

	when ever there is a change in the state object in funtional component then to render its new value dynamically we use useState function to bind to state and change with custom funtion handler.
	syntax:	
		const [var,fun_name]=useState('default_value_of_var')

		to update the value we use fun_name('new_value');
		it simply update the value and render wherever the variable is used.

Hooks Rules:
	-> Every hook name is definetly start with 'use' example useState.
	-> Component name must be Capitalise otherwise it throws error.
	-> Every hook need to be declared inside a funtion body or Inside Component
	-> we cannot hook conditionally


	useState with Objects:  const [Obj_name,setObject] =useState({'..':'..','..':'..'})
		when we working with the objects in useState, using setObject('...') or useState({key1: val1'}) in both of the cases the entire object is modified.
		Hence to modify only certain key value in object, we use spread operator.
			setObject({...Obj_name, key1: val1});

	In useState we can also use functional update rather than the direct assingment.
	i.e cont [var,fun_name]=useState('value')

	to use functional update we use:
		fun_name((old_value) => {
			....
			....
			retur new_value
		});
	or by direct fun_name('new_value')

	In above two methods direct method is synchronised but funtional is asynchronised

2.useEffect:

	By default useEffect runs after every re-render when ever there is change in the state variable present inside the useEffect function.
	It used to do work outside of component, i.e data fetching etc.
	It consists of callback function which run after every re-render of the component.
	we can also use conditional statements inside useEffect

	Syntax:
		useEffect(() => {
			....
			....
		});
	
	Dependency List:
		
		It is the second parameter in the useEffect after call back function.
		-> If there is no Dependency List then useEffect runs on every re-render
		-> If there is Dependency List and Empty, then useEffect runs only once.
		-> If Dependency List having parameter of state variable, then it excute on every re-render if it changes values in component.
		-> we can have more than one useEffect in the component.
		
	Syntax:
		useEffect(() => {
			....
			....
		},[]);

	to use clean up i.e removing the event listener in the component that is render during useEffect we use:
		useEffect( () => {
			....
			....addEvenListener('event_name',call_back);
			return () => {
				....
				....removeEventListener(''.callback);
			}
		});

	If we won't add clean up, then every time useEffect re-render it will call new eventLisener
	which decrease performance.

3.Short- Circute Evaluation:
	
	val = '' || 'Ravi teja'
	val = '' && 'Ravi Teja'	

	if val is false or empty string:
        then || operator gives the other string, not val
             && operator gives the val string, not other.

	val = 'Ravi' || 'No name'
	val = 'Ravi' && 'Yes Name'

       else if val is true or not empty string
            || operator gives the val string, not val
            && operator gives the other string not val

4.Forms:

	Controlled forms are that the state variables are bond to the input fields, i.e., the change the input field immediately update the state variable and the text in the input field will display from the state variable not from the keyboard we typing.
    	So controlled forms uses onChange to event to first update state variable and dispaly in the text field.


5.useRef:

	It is used to get the value of the input field
	    It preserves the value of the input tag
	    Does NOT trigger the re-render.
	    Target Dom nodes/elements

6.useContext:

	When we have multiple Components and some data is transfered between components we have send the data as props to all the intermediate components as well.
	So inorder to send data once from starting component and fetch data which component it required we use useContext method.
	we first create Provider which contains all the value to send to the components.

	i.e const contextProider = React.creatContext()

	the we insert all the code in the between provider like
		<contextProvider.Provider value={{all the values as named Objects}}>
			<Comp1 />
			<Comp2 />
		</contextProvider.Provider>
	and inside the component we fetch the required named component as:
	
		const {namedData} = useContext(contextProvider)
	and the intermediate components in comp1 and comp2 can also use the contextProvider.


7.PropTypes:

	When we recieve the props as objects some of the objects might miss keys.so when we render the data using the keys, then we might ended up using undefined value, which will break the application.
	Hence PropTypes is used to handle such data inconsistency.we defined the propTypes in that component using 
	Comp1.PropType = {
		prop.var1 : PropType.string|object|number|array|bool.isRequired
		....
		....
	}

	then we decide what is the default value for the missing data:
		Comp1.defaultProp ={
			prop.var1 : 'No value',
			....
			....
		}
	By these, we can handle the missing data for the props in the component.

