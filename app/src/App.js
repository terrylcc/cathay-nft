import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Home from './page/Home';
import NFTMarketplace from './page/NFTMarketplace';
import NFTItem from "./page/NFTItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }, {
    path: "/nfts",
    element: <NFTMarketplace />,
  }, {
    path: "/nfts/nft",
    element: <NFTItem />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
