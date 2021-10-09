import './App.css';
import AComponent from './components/AComponent';
import { createContext } from 'react';

export const DataContext = createContext();

function App() {
    return (
        <DataContext.Provider value={{ name: 'Ali', family: 'Bahaari' }}>
            <AComponent />
        </DataContext.Provider>
    );
}

export default App;
