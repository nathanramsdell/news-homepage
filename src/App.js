import Hero from './components/hero/Hero';
import Navigation from './components/navigation/Navigation';
import Posts from './components/posts/Posts';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        {/* Navigation */}
        <Navigation />
        {/* Hero */}
        <Hero />
        {/* Posts */}
        <Posts />
      </div>
    </div>
  );
}

export default App;
