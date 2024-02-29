import { useEffect } from "react";
import "./App.css";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";
import productApi from "./api/productApi";
import { Provider } from "react-redux";

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      }
      const productList = await productApi.getAll(params);
      console.log(productList)
    };
    fetchProducts();
  }, []);
  return (
    <div>
      
      <TodoFeature />
      <AlbumFeature />
    </div>
  );
}

export default App;
