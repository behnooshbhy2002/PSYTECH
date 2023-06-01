import Star from "./Star";
import "./style.css";

export default function StarRating({ totalStar }) {
  const {
    stars,
    hoverd,
    rated,
    handleSetHovered,
    handleSetRated,
    handleReset,
  } = Star(totalStar);

  return (
    <div className="star-container">
      <div>
        {[...Array(stars)].map((each, i) => (
          <span
            key={i}
            onMouseOver={() => {
              handleSetHovered(i);
            }}
            onMouseOut={() => {
              handleSetHovered(rated);
            }}
            onClick={() => {
              handleSetRated(i);
            }}
            className={i <= hoverd ? "hovered" : ""}
          >
            ★
          </span>
        ))}
      </div>
      <button onClick={() => handleReset()}>Reset Rating</button>
    </div>
  );
}
