import './App.css';
import Search from './components/search/search';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData); //to receive props in order to implement the API.
  }
  return (
    <div className="container">
      <Search onSearchChange = {handleOnSearchChange} />
    </div>
  );
}

export default App;
