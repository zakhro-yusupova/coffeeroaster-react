import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Collection from './Components/Collection/Collection';
import Quality from './Components/Quality/Quality';
import Work from './Components/Work/Work';
import Footer from './Components/Footer/Footer';

import './Assets/main.css';

function App() {
	return (
		<div>
			<Header />
			<Hero />
			<Collection />
			<Quality />
			<Work />
			<Footer />
		</div>
	);
}

export default App;
