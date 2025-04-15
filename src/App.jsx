import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import ItemsPage from './pages/items';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" />
					<Route path="/items" element={<ItemsPage />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
