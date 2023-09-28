import FlatsContainer from './components/flats/FlatsContainer';
import NavBar from './components/nav/NavBar';

function App() {
  return (
    <main className="w-full min-h-screen bg-gray-100 text-gray-950 font-montserrat">
      <NavBar />
      <FlatsContainer />
    </main>
  );
}

export default App;
