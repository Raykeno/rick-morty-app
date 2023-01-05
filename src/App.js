import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import axios from 'axios';
import Characters from './Characters';
import Character from './Character';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="/characters" element={<Characters />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

