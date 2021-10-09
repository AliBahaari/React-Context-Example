import { useContext } from 'react';
import { DataContext } from '../App'; 
import '../styles/BComponent.css';

function BComponent() {

    const data = useContext(DataContext);

    return (
        <div className="BComponent">
            <h2>You're Checking Context API Performance!</h2>
            <p>The Data Below Is Getting Directly from a Upper Components:</p>
            <p>
              { data.name } { data.family }
            </p>
        </div>
    )
}

export default BComponent;
