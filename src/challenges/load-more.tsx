import React, { useState } from 'react'
import Title from '../components/Title';
import DescriptionsJSON from '../descriptions.json';

function LoadMore(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <Title description={DescriptionsJSON.loadMore} />
                <div className='d-flex flex-row'>

                </div>
            </header>
        </div>
    )
}

export default LoadMore
