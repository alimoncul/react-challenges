import { useState } from 'react'
import Title from '../components/Title';
import DescriptionsJSON from '../descriptions.json';
import { ReactComponent as LoadingIndicator } from '../assets/loading-indicator.svg';
import { wait } from '../helpers';

function Api(): JSX.Element {
    const [data, setData] = useState({ "brand": "", "name": "", "style": "", "hop": "", "yeast": "", "malts": "", "ibu": "", "alcohol": "", "blg": "" });
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const fetchABeer = async () => {
        setIsLoading(true);
        await wait(1000);
        const resp = await fetch("https://random-data-api.com/api/v2/beers?size=1");
        const toJSON = await resp.json();
        setIsLoading(false);
        setIsLoaded(true);
        setData(toJSON);
    };

    return (
        <div className="App">
            <header className="App-header">
                <Title description={DescriptionsJSON.api} />
                <div className='d-flex flex-wrap'>
                    <div className='d-flex w-100'>
                        <button disabled={isLoading} type="button" className="btn btn-dark" onClick={fetchABeer}>Fetch Data</button>
                    </div>
                </div>
                <div className='d-flex w-100 justify-content-center'>
                    {isLoading && <LoadingIndicator />}
                    {isLoaded && !isLoading &&
                        <div className="card bg-dark w-50 m-4">
                            <div className="card-body bg-dark">
                                <h5 className="card-title bg-dark">{data.name}</h5>
                                <p className="card-text bg-dark">{data.brand}, {data.style}, {data.yeast}</p>
                            </div>
                            <ul className="list-group list-group-flush bg-dark">
                                <li className="list-group-item bg-dark text-white text">Malts: {data.malts}</li>
                                <li className="list-group-item bg-dark text-white">Ibu: {data.ibu}</li>
                                <li className="list-group-item bg-dark text-white">Alcohol: {data.alcohol}</li>
                                <li className="list-group-item bg-dark text-white">Blg: {data.blg}</li>
                                <li className="list-group-item bg-dark text-white">Hop: {data.hop}</li>
                            </ul>
                        </div>
                    }
                </div>
            </header>
        </div>
    )
}

export default Api
