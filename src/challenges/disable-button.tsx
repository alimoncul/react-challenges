import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import DescriptionsJSON from '../descriptions.json';

function DisableButton(): JSX.Element {
    const [input, setInput] = useState('');
    return (
        <div className="App">
            <header className="App-header">
                <Title description={DescriptionsJSON.disableButton} />
                <div className='d-flex flex-row'>
                    <input className="form-control m-1" placeholder="Username" aria-label="Username" type="text" onChange={i => setInput(i.target.value)} />
                    <button disabled={!input?.length} className='btn btn-secondary m-1'>Submit</button>
                </div>
            </header>
        </div>
    )
}

export default DisableButton
