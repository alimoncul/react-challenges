import React, { useEffect, useState } from 'react'
import Title from '../components/Title';
import DescriptionsJSON from '../descriptions.json';
import { ReactComponent as LoadingIndicator } from '../assets/loading-indicator.svg';
import { wait } from '../helpers';
import { User } from '../helpers/types';

function LoadMore(): JSX.Element {
    const [data, setData] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const getData = async (page?: number) => {
        setIsLoading(true);
        await wait(500);
        const resp = await fetch("https://random-data-api.com/api/v2/users?size=5");
        const toJSON = await resp.json();
        setData(page ? data.concat(toJSON) : toJSON)
        setIsLoading(false);
        setIsLoaded(true);
    }
    useEffect(() => { getData() }, [])
    return (
        <div className="App">
            <header className="App-header">
                <Title description={DescriptionsJSON.loadMore} />
                <div className='d-flex w-100 justify-content-center'>
                    {isLoading && <LoadingIndicator />}
                    {isLoaded && !isLoading && data?.length &&
                        data.map((d) => {
                            return (
                                <div>
                                    <h1>{d.first_name + ' ' + d.last_name}</h1>
                                    <h3>{d.gender}</h3>
                                    <div>
                                        <span className="badge">Posted 2012-08-02 20:47:04</span>
                                        <div className="pull-right">
                                            <span className="label label-default">{d.date_of_birth}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </header>
        </div>
    )
}

export default LoadMore
