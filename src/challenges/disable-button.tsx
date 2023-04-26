import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function DisableButton(): JSX.Element {
    const [input, setInput] = useState('');

    return (
        <div className="App">
            <header className="App-header">
                <Link to="/" className="fs-2 float-end mb-2">← Menu</Link>
                <div className="card text-start bg-dark mb-4">
                    <div className="card-header bg-dark fs-4">
                        Disable Button
                        <span className="badge badge-primary badge-pill text-success">EASY</span>
                        <span className="badge badge-primary fs-6 float-end">src/challenges/disable-button.tsx</span>
                    </div>
                    <div className="card-body bg-dark">
                        <p className="card-text bg-dark fs-6">Make the button disabled when there is no character on the input field. Enable the `Submit` button (remove button from being disabled) when there is at least one character.</p>
                    </div>
                </div>
                <div className='d-flex flex-row'>
                    <input className="form-control m-1" placeholder="Username" aria-label="Username" type="text" onChange={i => setInput(i.target.value)} />
                    <button disabled={!input?.length} className='btn btn-secondary m-1'>Submit</button>
                </div>
            </header>
        </div>
    )
}

export default DisableButton
