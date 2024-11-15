import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import DescriptionsJSON from '../descriptions.json';
import { ReactComponent as LoadingIndicator } from '../assets/loading-indicator.svg';
import { wait } from '../helpers';
import { User } from '../helpers/types';

function LoadMore(): JSX.Element {
	const [page, setPage] = useState(1);
	const [data, setData] = useState<User[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const getData = async (page?: number) => {
		setIsLoading(true);
		try {
			await wait(500);
			const resp = await fetch(
				'https://random-data-api.com/api/v2/users?size=5'
			);

			if (resp.status === 200) {
				const toJSON = await resp.json();

				if (page) {
					setPage(page + 1);
					setData(data.concat(toJSON));
				} else {
					setData(toJSON);
				}
			}
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<Title description={DescriptionsJSON.loadMore} />
				<div>
					<button
						type="button"
						className="btn btn-primary"
						onClick={() => getData(page)}
					>
						Load more
					</button>
				</div>
				{isLoading && <LoadingIndicator />}
				<div className="w-100 justify-content-center">
					{!!data?.length &&
						data.map((d, index) => {
							return (
								<div
									className="m-4 border rounded p-2"
									key={d.first_name + '_' + d.last_name}
								>
									<h2 className="position-absolute">
										{index + 1}
									</h2>
									<h4>{d.first_name + ' ' + d.last_name}</h4>
									<h5>{d.gender}</h5>
									<div>
										<h6>{d.date_of_birth}</h6>
									</div>
								</div>
							);
						})}
				</div>
			</header>
		</div>
	);
}

export default LoadMore;
