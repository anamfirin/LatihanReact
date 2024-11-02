import ImageCard from "./imageCard";
import bgImage from "/src/assets/img1.jpg";

function Card() {
  return (
    <main className="Card">
      <ImageCard imgSrc={bgImage}>
        <h3></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eos odio reiciendis neque corporis hic numquam
          voluptatum aliquid cupiditate atque magni suscipit at, placeat enim impedit quod veritatis possimus deleniti?
        </p>
      </ImageCard>
    </main>
  );
}

export default Card;
