import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Card from './my component/card/card';
import Item from './my component/item/item';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <Card />
   <Item />
  </>

   
  
);

