import { useState } from 'react'
import './App.css'
import Card from './Components/Card';

function App() {
  const [userName, setUserName] = useState('');
  const [hexColor, setHexColor] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Input name validation
    if (userName.length < 3 || userName[0] === ' ') {
      setErrorMessage("Por favor chequea que la información sea correcta");
      setIsFormValid(false);
      return;
    }

    // Color Hex validation
    if (hexColor.length < 6) {
      setErrorMessage("Por favor chequea que la información sea correcta");
      setIsFormValid(false);
      return;
    }

    setErrorMessage('');
    setIsFormValid(true);
  };

  return (
    <div class="container">
      <h1>Elige un color</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Ingresa tu nombre"
          value={userName}
          onChange={(e) =>setUserName(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Ingresa tu color favorito en formato HEX"
          value = {hexColor}
          onChange={(e)=>setHexColor(e.target.value)}
        />
        <button type='submit'>Enviar</button>
      </form>

      {errorMessage && <p class="errorMessage">{errorMessage}</p>}

      {isFormValid && <Card userName={userName} hexColor={hexColor} />}
    </div>
  )
}

export default App