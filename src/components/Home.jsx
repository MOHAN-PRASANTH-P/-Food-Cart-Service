import React, { useState, useEffect, useMemo } from 'react';
import { Product } from './Product';
import "./Home.css";
import data from "../assets/product.json";
import { Trie } from "../utils/Trie";
import { Graph } from "../utils/Graph";
import { knapsack } from "../utils/knapsack";
import bg from "../assets/banana-leaf.webp";

export const Home = () => {
  const [product, setProduct] = useState(data);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [graph] = useState(new Graph());

  useEffect(() => {
    const video = document.getElementById("bg-video");

    const startVideo = () => {
      video.muted = false;
      video.play().catch(() => {});
      document.removeEventListener("click", startVideo);
      document.removeEventListener("scroll", startVideo);
    };

    document.addEventListener("click", startVideo);
    document.addEventListener("scroll", startVideo);

    return () => {
      document.removeEventListener("click", startVideo);
      document.removeEventListener("scroll", startVideo);
    };
  }, []);

  const trie = useMemo(() => new Trie(), []);

  useEffect(() => {
    data.forEach(item => trie.insert(item.name.toLowerCase()));
  }, [trie]);

  // useEffect(() => {
  //   graph.addEdge("biryani", "theepori chicken lollipop");
  //   graph.addEdge("biryani", "gun fire chicken");
  //   graph.addEdge("biryani", "kaadai chicken masala");
  //   graph.addEdge("biryani", "pepsi");
  //   graph.addEdge("biryani", "coke");
  //   graph.addEdge("meals", "nethili fish fry");
  //   graph.addEdge("meals", "seer fish fry");
  //   graph.addEdge("meals", "tawa meen roast");
  //   graph.addEdge("meals", "nattu kozhi pepper roast");
  //   graph.addEdge("veg meals", "tea(theneer)");
  //   graph.addEdge("veg meals", "filter coffee");
  //   graph.addEdge("fried rice","french fries");
  //   graph.addEdge("fried rice","coke");
  //   graph.addEdge("fried rice","pepsi");
  // }, [graph]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    if (query.length > 0) {
      setSuggestions(trie.getSuggestions(query));
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (s) => {
    setSearch(s);
    setSuggestions([]);
  };

  const filteredProducts = search
    ? product.filter(
        p =>
          p.name.toLowerCase().includes(search) ||
          suggestions.includes(p.name.toLowerCase())
      )
    : product;

  const budget = 200;
  const bestCombo = knapsack(data, budget);

  const recommendations = search
    ? graph.getRecommendations(search.toLowerCase())
        .map(name => data.find(p => p.name.toLowerCase() === name))
        .filter(Boolean)
    : [];

  return (
    <div className="home-container">
      <div className="search-container">
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search cart items..."
            value={search}
            onChange={handleSearch}
            className="search-box"
          />
        </div>

        {suggestions.length > 0 && (
          <div className="recommend-box">
            <h4>Suggestions</h4>
            <ul>
              {suggestions.map((s, index) => (
                <li key={index} onClick={() => handleSuggestionClick(s)}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 🔄 Layout Switcher */}
      {!search ? (
        <>
          {/* Normal view: Hero on top, all products below */}
          <div className="hero-section">
            <video
              className="hero-video"
              loop
              playsInline
              id="bg-video"
              controls={false}
            >
              <source src="/assets/restaurant-bg.mp4" type="video/mp4" />
            </video>
            <div className="overlay"></div>
            <div className="steam"></div>
            <div className="hero-content">
              <h1 className="restaurant-tamil">
                <img
                  src="https://thalappakatti.com/wp-content/uploads/2024/04/logo-thalappakatti.gif"
                  alt="logo"
                />
                திண்டுக்கல் தலப்பாக்கட்டி
              </h1>
              <h1 className="restaurant-name">Dindigul Thalappakatti</h1>
              <p className="tagline">
                Authentic South Indian Flavors, Served with Love ❤️
              </p>
            </div>
          </div>

          <div className="Products">
            {filteredProducts.map((p) => (
              <Product key={p.id} product={p} />
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Filter mode: Products on top, hero below */}
          <div className="Products">
            {filteredProducts.map((p) => (
              <Product key={p.id} product={p} />
            ))}
          </div>

          <div className="hero-section">
            <video
              className="hero-video"
              loop
              playsInline
              id="bg-video"
              controls={false}
            >
              <source src="/assets/restaurant-bg.mp4" type="video/mp4" />
            </video>
            <div className="overlay"></div>
            <div className="steam"></div>
            <div className="hero-content">
              <h1 className="restaurant-tamil">
                <img
                  src="https://thalappakatti.com/wp-content/uploads/2024/04/logo-thalappakatti.gif"
                  alt="logo"
                />
                திண்டுக்கல் தலப்பாக்கட்டி
              </h1>
              <h1 className="restaurant-name">Dindigul Thalappakatti</h1>
              <p className="tagline">
                Authentic South Indian Flavors, Served with Love ❤️
              </p>
            </div>
          </div>
        </>
      )}

      {/* DSA Section */}
      {/* <div className="dsa-section">
        {search && (
          <>
            <h3>Recommended with {search}:</h3>
            <div className="recommendations">
              {recommendations.length > 0 ? (
                recommendations.map((item, i) => (
                  <Product key={i} product={item} />
                ))
              ) : (
                <p>No recommendations available.</p>
              )}
            </div>
          </>
        )}
      </div> */}

      <div className="copyright">
        <a>©MohanPrasanthP</a>
      </div>
    </div>
  );
};
