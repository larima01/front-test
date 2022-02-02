import { ToastContainer } from 'react-toastify';
import NewUser from './components/NewUser/NewUser.component';
import ViewUser from './components/ViewUser/ViewUser.component';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<div className="App">
			<NewUser />
			<ViewUser />
			{/* Toast Alert */}
			<ToastContainer position="top-right" autoClose={5000} />
		</div>
	);
}

export default App;
