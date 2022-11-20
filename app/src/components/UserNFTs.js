import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {
  Link
} from "react-router-dom";

const API_URL = "https://jd2r369gmf.execute-api.ap-southeast-1.amazonaws.com/dev"; // mock account

function UserNFTs() {
    // Retrieve the NFT data from API endpoint
    const [NFTs, setNFTs] = useState([])
    useEffect(() => {
        axios.get(API_URL + "/account/001").then((res) => {
            setNFTs(res.data);
        })
    }, []);
    
    // Return the JSX template
    if (NFTs === []) {
        return (
            <div className="usernfts">
              <h2>Wallet</h2>
              <div className='nfts'>
              </div>
            </div>
          );
    } else {
        var dump = []
        NFTs.forEach(nft => {
            var temp = (
                <div className='nft'>
                <Link to={"/profile/wallet/nft/" + nft.id}>
                    <img src={nft.img_url} alt="Sai Kung" />
                </Link>
                <p className='info'>Cathay @ {nft.name}</p>
                </div>
            );
            dump.push(temp);               
        });
        return (
            <div className="usernfts">
              <h2>Wallet</h2>
              <div className='nfts'>
                {dump}
              </div>
            </div>
          );
    }
    
}

export default UserNFTs;