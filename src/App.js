import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {PageNotFound} from './pages/404';
import {Home} from './pages/Home';

export default function App(){
  
  return(
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/*' element={<PageNotFound />}></Route>
      </Routes>
    </Router>
  );
}
