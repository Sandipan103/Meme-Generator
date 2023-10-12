import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const REACT_APP_GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const REACT_APP_GIPHY_API_KEY = 'dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW';

const Tag = () => {
  const [gif, setGif] = useState();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    console.log(name);
    fetchData();
  };

  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${REACT_APP_GIPHY_API_KEY}&tag=${name}`;
    const {data} = await axios.get(url);
    setGif(data.data.images.downsized_large.url);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h3> Tag Mim </h3>
      { loading ? <Loader /> : <img src={gif} alt="tag mim" /> }
      <br />
      <input
        type="text"
        value={name}
        placeholder="search mim"
        onChange={ (e) => {setName(e.target.value)}}
      />
      <button onClick={handleSubmit}> generate </button>
    </div>
  );
};

export default Tag;


