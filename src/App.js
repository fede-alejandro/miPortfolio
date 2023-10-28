import { Route, Routes } from 'react-router-dom';

import { NavBar, AboutMe, Education, Experience, Skills, ProjectList } from './components';

function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<AboutMe />} />
        <Route path='/educacion' element={<Education />} />
        <Route path='/experiencia' element={<Experience />} />
        <Route path='/proyectos' element={<ProjectList />} />
        <Route path='/competencias' element={<Skills />} />
      </Routes>

    </>
  );
}

export default App;
