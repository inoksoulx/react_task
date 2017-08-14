import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import List from './components/App';
import AddItem from './components/Add';
import NewVal from './components/Change';
import React from 'react';
import { Route, Link } from 'react-router-dom';
import './styles/app.css'

const ListApp = () =>
  <HashRouter>
    <div>
      <ul className='header'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/add'>Add</Link>
        </li>
      </ul>

      <hr />

      <Route exact path='/' component={List} />
      <Route path='/add' component={AddItem} />
      <Route path='/change/:itemId' component={NewVal} />
    </div>
  </HashRouter>;

ReactDOM.render(<ListApp />, document.getElementById('root'));
