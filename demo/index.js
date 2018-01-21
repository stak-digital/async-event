import createAsyncEvent from '../src/index.js';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			asyncEvent: createAsyncEvent()
		};

		this.handleErrorSimulationButtonPressed = this.handleErrorSimulationButtonPressed.bind(this);
		this.handleSuccessSimulationButtonPressed = this.handleSuccessSimulationButtonPressed.bind(this);
	}

	handleErrorSimulationButtonPressed() {

	}

	handleSuccessSimulationButtonPressed() {

	}

	render() {
		return (
			<div>
				<div>
					<button onClick={this.handleSuccessSimulationButtonPressed}>
						Simulate Success
					</button>
					<button onClick={this.handleSuccessSimulationButtonPressed}>
						Simulate Error
					</button>
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	React.createElement(App),
	document.getElementById('root')
);