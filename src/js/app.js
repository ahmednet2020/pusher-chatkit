import 'babel-polyfill';
import 'raf/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
//import compponents
import Toggel from './components/toggel';
//app class

class App extends React.Component
{
	render()
	{
		return (
			<div>
				<Toggel>
				{
					({on,toggle})=>(
					<div>
						{on && <h2>children hello world</h2>}
						<button type="button" onClick={toggle}>show/hidden</button>
					</div>
					)
				}
				</Toggel>
			</div>
		)
	}
	componentDidMount()
	{
		let app = ReactDOM.findDOMNode(this);
		console.dir(app);
	}
}

//render jsx
ReactDOM.render(<App />, document.getElementById('app'));