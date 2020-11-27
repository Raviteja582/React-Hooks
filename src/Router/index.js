import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './home';
import About from './about';
import Menu from './menu';
import Contact from './contact';
import Error from './error';
import Navbar from './navbar';
import Student from './student';

const Main = () => {
    return (
            <Router>
                <Navbar />
            {/* 'exact' Only if there is no route point then only it matches '/' */}
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                
                    {/* Here we already create a menu component and listed all students.
                        If we select a student we get a route point of /menu/:id with corresponding to particular student.
                    */}

                    <Route exact path="/menu/:id" children={<Student />}></Route>
                
                    <Route path="/menu">
                        <Menu />
                    </Route>


                    {/* Here it matches every page route point wheather it exists or not exits it will match. 
                        So to avoid matching the avaliable matching route point we use Switch Statement.                
                    */}
                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>
            </Router>
    );
}

export default Main;