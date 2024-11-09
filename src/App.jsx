import { useState } from 'react'
import './App.css'
import Card from './Components/Card';

function App() {
  const [formData, setFormData] = useState({
    userName: '',
    hexColor: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { userName, hexColor } = formData;

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
    <div className="container">
      <h1>Elige un color</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Ingresa tu nombre"
          value={formData.userName}
          onChange={(e) =>
            setFormData({ ...formData, userName: e.target.value })
          }
        />
        <input 
          type="text" 
          placeholder="Ingresa tu color favorito en formato HEX"
          value = {formData.hexColor}
          onChange={(e) =>
            setFormData({ ...formData, hexColor: e.target.value })
          }
        />
        <button type='submit'>Enviar</button>
      </form>

      {errorMessage && <p className="errorMessage">{errorMessage}</p>}

      {isFormValid && <Card userName={formData.userName} hexColor={formData.hexColor} />}
    </div>
  )
}

export default App