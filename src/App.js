import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import HomeScreen from '../src/components/homeComponents/HomeScreen'
import NewRecipeScreen from '../src/components/newRecipeComponents/NewRecipeScreen' 
import DetailScreen from '../src/components/detailComponents/DetailScreen'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path='newRecipe' element={<NewRecipeScreen />} />
        <Route path='recipe/:id' element={<DetailScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
