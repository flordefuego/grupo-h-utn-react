/*import React from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import GeneroContextProvider from './context/GeneroContext';
import ListaGenero from './components/ListaGenero';
import FormularioGenero from './components/FormularioGenero';

render(
function App() {
  return (
    <div className="App">
        <GeneroContextProvider>
          <div>
            <FormularioGenero></FormularioGenero>
          </div>
          <div>
            <ListaGenero></ListaGenero>
          </div>
          <div>
            <FormularioGenero></FormularioGenero>
          </div>
          <div>
            <ListaGenero></ListaGenero>
          </div>
          <div>
            <FormularioGenero></FormularioGenero>
          </div>
          <div>
            <ListaGenero></ListaGenero>
          </div>
        </GeneroContextProvider>
    </div>
  );
});

export default App;*/
import React from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import LibroContextProvider from './context/LibroContext';
import ListaLibro from './components/ListaLibro';
import FormularioLibro from './components/FormularioLibro';
import GeneroContextProvider from './components/Genero/GeneroContex';
import ListaGenero from './components/Genero/ListaGenero';
import FormularioGenero from './components/Genero/FormularioGenero';
import { render } from '@testing-library/react';

class App extends Component {
 
  render(){
    return (
      <FormularioLibro></FormularioLibro>,
      <ListaLibro> </ListaLibro>,
      <LibroContextProvider></LibroContextProvider>,
      <FormularioGenero></FormularioGenero>,
      <ListaGenero></ListaGenero>,
      <GeneroContextProvider></GeneroContextProvider>
    )
  }
};
export default App;
