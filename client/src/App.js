import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Calendar from './components/Calendar'
import DayEventList from './components/DayEventList'
import EventAddForm from './components/EventAddForm'
import EventEditForm from './components/EventEditForm'
import EventList from './components/EventList'
import EventSingle from './components/EventSingle'

class App extends Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <Header />
                    <Route exact path='/' component={Calendar} />
                    <Route exact path='/day/:day' component={DayEventList} />
                    <Route path='/day/:day/new' component={EventAddForm} />
                    <Route path='/event/:id/edit' component={EventEditForm} />
                    <Route exact path='/event' component={EventList} />
                    <Route exact path='/event/:id' component={EventSingle} />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
