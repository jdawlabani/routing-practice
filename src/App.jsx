import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Input from './Components/Input';
import ColorInput from './Components/ColorInput';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <p>
        <Link to='/home'>Home</Link>
      </p>
      <Routes>
        <Route path='/home' element={<h1>Welcome</h1>}/>
        <Route path='/:input' element={<Input />}/>
        <Route path='/:input/:color1/:color2' element={<ColorInput />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
