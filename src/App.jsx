
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';

import ListaFilm from './pages/ListaFilm'
import { GlobalProvider } from './contexts/GlobalContext';

function App() {


  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<ListaFilm />} />

          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App