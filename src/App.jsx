import { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Nav } from "./components/Nav";
import { getCallResults } from "./components/ApiFetch";
import { callShopApi } from "./components/ApiFetch";

function App() {
  return (
    <div className="homeContainer">
      <div className="containerRandom">
        <h1>Home</h1>
        <Nav />
      </div>

      <div role="test" className="lol">
        <div className="homepageHeader">
          <h2>Brows our new store now!</h2>
        </div>
        <div className="homepagePara">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eaque
          provident rem numquam molestiae facilis fuga natus in corrupti dicta,
          ullam modi. Nihil architecto eligendi quibusdam sequi sint dolorum
          suscipit. Natus hic voluptas, illo fugiat impedit accusantium
          voluptatibus voluptatem a dolorem cupiditate aperiam esse nostrum
          aliquam totam vitae, obcaecati dolor necessitatibus ullam, minus quas
          quam. Aliquid, eveniet suscipit? Totam esse accusamus incidunt omnis,
          adipisci iste autem amet at quisquam ea sapiente architecto eligendi
          ab harum, voluptatum molestiae voluptatem enim deserunt culpa repellat
          quia voluptate vitae. Minus numquam officiis dolor quisquam eos nobis
          provident nesciunt labore hic molestiae natus, blanditiis odio nulla
          corporis voluptate nemo ipsum in temporibus eveniet aperiam! Iste
          eaque ipsam repudiandae doloremque amet sit enim ut? At incidunt
          ducimus quas rem ab nostrum quam minima architecto officia nihil a
          necessitatibus quasi earum, nesciunt id expedita error! Totam enim
          accusantium blanditiis, dignissimos, ut repellendus, id distinctio
          magni voluptate deserunt aperiam nam autem voluptas. Veritatis sed
          minima quos, enim doloremque aperiam asperiores tempore numquam ipsam
          voluptatibus earum aliquid quis quisquam vitae fuga. Praesentium
          pariatur eligendi exercitationem nemo illum suscipit corporis at ex
          qui reprehenderit repudiandae iusto sint id ut maiores facilis fugit
          debitis architecto sit provident quibusdam, accusamus incidunt autem.
        </div>
      </div>
    </div>
  );
}

export default App;
