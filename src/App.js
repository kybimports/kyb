import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PageInicio from './pages/Inicio/PageInicio';
import Navbar from './components/Navbar/Navbar';
import { DataProvider } from './data/Data';
import PageInformacion from './pages/Informacion/PageInformacion';
import PageCatalogo from './pages/Catalogo/PageCatalogo';
import PagePromociones from './pages/Promociones/PagePromociones';


function App() {

  const RutasAcceso = [
    {
      Name: 'HOME',
      Ruta: ''
    },
    {
      Name: 'CATALOGO',
      Ruta: '/Catalogo'
    },
    {
      Name: 'PROMOCIONES',
      Ruta: '/Promociones'
    },
    {
      Name: 'INFORMACIÓN',
      Ruta: '/Informacion'
    }
  ]

  return (
    <div className="App">
      <DataProvider>
        <Router>
          <Navbar Accesos={RutasAcceso} />
          <Routes>
            <Route path='/' element={<PageInicio />} />
            <Route path='/Informacion' element={<PageInformacion />} />
            <Route path='/Catalogo' element={<PageCatalogo />} />
            <Route path='/Promociones' element={<PagePromociones />} />
          </Routes>
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
