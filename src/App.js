import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Input from './Components/Input';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<h1>Welcome</h1>}/>
        <Route path='/:input' element={<Input />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
