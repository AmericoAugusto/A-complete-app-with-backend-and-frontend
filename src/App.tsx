import { useState } from 'react'
import InclusaoLivros from './components/InclusaoLivros'
import MenuSuperior from './components/MenuSuperior'
import PathsOfSite   from  "./routes/routes"
import React from 'react'
import ManutencaoLivros from './components/ManutencaoLivros'
import ResumoLivros from './components/ResumoLivros'
import { Route, Routes } from 'react-router-dom'
import { AboutBooks } from './types/types'


const App: React.FC<AboutBooks> = () => {
  return (
    <>
    <MenuSuperior />
    <Routes>
                    <Route path = "/" element={<InclusaoLivros />} />
                    <Route path = "manut" element={<ManutencaoLivros />} />
                    <Route path='resumo' element={<ResumoLivros />} />
                </Routes>
    </>
  )
}

export default App
