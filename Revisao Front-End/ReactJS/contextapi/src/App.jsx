import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Perfil from './components/perfil/Perfil'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Produto from './components/produto/produto'
import CadastroProduto from './components/cadastroProduto/CadastroProduto'
import ListaProduto from './components/listarProduto/ListaProduto'

function App() {


  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/perfil' element={<Perfil/>} />
      <Route path='/produto' element={<Produto/>} />
      <Route path='/cadastroProduto' element={<CadastroProduto/>} />
      <Route path='/listaProduto' element={<ListaProduto />} />
    </Routes>
    </BrowserRouter>
);
  

}

export default App;
