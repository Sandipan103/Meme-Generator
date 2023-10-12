import React, { useEffect, useState } from "react";
import axios from 'axios';
import Loader from "./Loader";
import env from "react-dotenv";


const REACT_APP_GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

    
  const [gif, setGif] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = ()=> {
    fetchData();
  }

  async function fetchData () {
    setLoading(true);
    console.log(REACT_APP_GIPHY_API_KEY)
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${REACT_APP_GIPHY_API_KEY}`;
    const {data} = await axios.get(url);
    setGif(data.data.images.downsized_large.url);
    setLoading(false);
  }

  useEffect( () => { fetchData() }, [])

  return (
    <div>
      <h3> Random Mim </h3>
      {
        loading ? <Loader /> : <img src={gif} alt="random mim" />
      }
      <br/>
      <button onClick={handleSubmit}> generate </button>
    </div>
  );
};

export default Random;
