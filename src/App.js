import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom'
import Educacion from './components/Educacion';
import Experiencia from '././components/experiencia/Experiencia';
import Proyectos from '././components/proyectos/Proyectos';
import Competencias from './components/Competencias';
import SobreMi from './components/Sobre-mi';


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<SobreMi />} />
        <Route path='/educacion' element={<Educacion />} />
        <Route path='/experiencia' element={<Experiencia />} />
        <Route path='/proyectos' element={<Proyectos />} />
        <Route path='/competencias' element={<Competencias />} />
      </Routes>

    </>
  );
}

export default App;
