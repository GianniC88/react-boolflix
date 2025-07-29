import { BrowserRouter, Routes, Route } from 'react-router-dom'


import ListaFilm from './pages/ListaFilm'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<ListaFilm />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App