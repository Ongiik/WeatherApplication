import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData); //to receive props in order to implement the API.
  }
  return (
    <div className="container">
      <Search onSearchChange = {handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
