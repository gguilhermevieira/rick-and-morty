import Header from "./components/header/Header";
import { FavoriteProvider } from "./context/FavoriteContext";
import Favorite from "./pages/favorites/Favorite";
import Home from "./pages/home/Home";

import { Route, Routes } from "react-router-dom";

const menuItems = [
  { name: 'Início', route: '/' },
  { name: 'Favoritos', route: '/favorite' }
];

function App() {
  return (
    <FavoriteProvider>
      <Header title='Rick and Morty API' itens={menuItems} />
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </div>
    </FavoriteProvider>
  );
}

export default App;
