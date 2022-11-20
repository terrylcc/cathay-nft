import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Home from './page/Home';
import UserProfile from './page/UserProfile';
import NFTMarketplace from './page/NFTMarketplace';
import NFTItem from "./page/NFTItem";
import UserWallet from "./page/UserWallet";
import UserNFT from "./page/UserNFT";

// Route to different pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserProfile />,
  }, {
    path: "/profile",
    element: <UserProfile />,
  }, {
    path: "/profile/wallet",
    element: <UserWallet />,
  }, {
    path: "/profile/wallet/nft/:id",
    element: <UserNFT />,
  }, {
    path: "/nft",
    element: <NFTMarketplace />,
  }, {
    path: "/nft/:id",
    element: <NFTItem />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
