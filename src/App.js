import React, { useEffect, useState } from 'react'; //3.4K
import Recipe from './Recipe';
import './App.css';
import Footer from './components/FooterComponent';


const App = () => {
  const APP_ID = "fac0a231";
  const APP_KEY = "684bee62aec34effaf954c160206b85a";
  const [ recipes, setRecipes ] = useState([]);
  const [ search, setSearch ] = useState('');
  const [ query, setQuery ] = useState('pasta');

  useEffect(() => {
    getRecipes();
    console.log("Effect has been run");
  }, [ query ]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };


  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }


  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }



  return (
    <div className="App" >
      <h1 id="head">The Great Recipe Booklet</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {/* Collecting Information from the API */}
        {recipes.map(recipe => (
          <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={Math.floor(recipe.recipe.calories)} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
        ))}

      </div>
      <Footer />
    </div >




  );
};
export default App;