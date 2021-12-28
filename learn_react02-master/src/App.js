import './App.css';
import { useState } from 'react';
// Components
import ColorInput from './ColorInput';
import ColorOutput from './ColorOutput';

function App() {

  const [color, setColor] = useState('');

  return (
    <div className="App">
      <ColorOutput
        color={color}
        setColor={setColor}
      />
      <ColorInput
        color={color}
        setColor={setColor}
      />
    </div>
  );
}

export default App;
