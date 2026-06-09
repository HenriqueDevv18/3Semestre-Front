import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Perfil from './components/perfil/Perfil'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Produto from './components/produto/produto'
import CadastroProduto from './components/cadastroProduto/CadastroProduto'
import ListaProduto from './components/listarProduto/ListaProduto'
import PrivateRoute from './routes/PrivateRoute'

function App() {


  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />

      <Route path='/perfil' element={<Perfil/>}/>

      <Route path='/produto' element={
        <PrivateRoute>
        <Produto/>
        </PrivateRoute>
        } 
        />
      
      <Route path='/cadastroProduto' element={
        <PrivateRoute>
        <CadastroProduto/>
        </PrivateRoute>
      } 
      />
      <Route path='/listaProduto' element={
        <PrivateRoute>
        <ListaProduto />
        </PrivateRoute>
        } 
        />
    </Routes>
    </BrowserRouter>
);
  

}

export default App;
