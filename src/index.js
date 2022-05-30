import React, {Fragment} from 'react';
import { createRoot } from 'react-dom/client';

import List from './containers/List'


import 'bootswatch/dist/lux/bootstrap.min.css';
import './index.css'

const container = document.getElementById('root');
const root = createRoot(container);

const App = () => {

  return (
    <Fragment>
      <nav className="navbar navbar-white bg-white p-3 border-bottom border-white">
        <a href="/" className='navbar-brand'>
          BlockBuster
        </a>
      </nav>
      <main className='bg-yellow'>
        <div className='container'>
          <List />
        </div>
      </main>
    </Fragment>
  )
}

root.render(
<React.StrictMode>
  <App />
</React.StrictMode>);

//reportWebVitals();