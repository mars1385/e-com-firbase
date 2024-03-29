//import
import React from 'react';

import './ErrorBoundary.scss';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		console.log(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className='ErrorImageOverlay'>
					<div className='ErrorImageContainer'></div>
					<h2 className='ErrorImageText'>Sorry This Page is Broken</h2>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
