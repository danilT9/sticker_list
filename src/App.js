import './App.css';
import data from "./data/stickers.json";
import { StickerList, GlobalStyles } from './comps/Stickers/StickerList';

function App() {
  return (
    <>
      <GlobalStyles />
      <StickerList stickers={data}></StickerList>
    </>
    
  );
}

export default App;
