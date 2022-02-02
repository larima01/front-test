import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Spinner = () => {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<TailSpin
				heigth="30"
				width="30"
				color="#11468F
				"
				arialLabel="loading-indicator"
			/>
		</div>
	);
};

export default Spinner;
