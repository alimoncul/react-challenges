import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import DescriptionsJSON from '../descriptions.json';

function ProgressBar(): JSX.Element {
	const [input, setInput] = useState(0);

	const inputPercentageHandler = (e: React.FormEvent<HTMLInputElement>) => {
		const transformedInt = e.currentTarget.value
			? parseInt(e.currentTarget.value)
			: 0;
		if (transformedInt > 99) {
			setInput(100);
		} else if (transformedInt < 0) {
			setInput(0);
		} else {
			setInput(transformedInt);
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				<Title description={DescriptionsJSON.progressBar} />
				<div className="d-flex flex-wrap">
					<div className="d-flex w-100">
						<input
							className="form-control m-1"
							value={input}
							placeholder="Percentage"
							aria-label="Percentage"
							type="number"
							onChange={inputPercentageHandler}
						/>
					</div>
					<div className="d-flex w-100">
						<progress
							className="w-100"
							id="file"
							value={input}
							max="100"
						>
							{input}%
						</progress>
					</div>
				</div>
			</header>
		</div>
	);
}

export default ProgressBar;
