// import React from "react";
import ImageCard from "./component/imageCard";
import bgImage from "/src/assets/img1.jpg";

function App() {
  return (
    <main className="App">
      <ImageCard imgSrc={bgImage}>
        <h3 className="text-xl font-bold mb-2">Wallpaper</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eos odio reiciendis neque corporis hic numquam
          voluptatum aliquid cupiditate atque magni suscipit at, placeat enim impedit quod veritatis possimus deleniti?
        </p>
        <div className="space-x-4 mt-4"></div>
      </ImageCard>
    </main>
  );
}

export default App;
