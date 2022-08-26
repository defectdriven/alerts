
import GlobalContext from './context/GlobalContext'
import AlertManager from './AlertManager'
import {AlertExample} from './AlertExample'
import './App.css';

function App() {
  return (
    <GlobalContext>
      <AlertManager />
      <AlertExample />
    </GlobalContext>
  );
}

export default App;
