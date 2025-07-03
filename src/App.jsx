import { Routes, Route } from 'react-router-dom';
import EspeciesViewer from './components/EspeciesViewer';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<h1>Inicio</h1>}/>
      <Route path="/especies" element={<EspeciesViewer/>}/>
      

    </Routes>
    <div className="container mt-5">
  <h1 className="text-primary">Hola Bootstrap</h1>
  <button className="btn btn-success">Click aquí</button>
  </div>

    </>
  )
}

export default App
