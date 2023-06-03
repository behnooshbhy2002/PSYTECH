import { useState } from "react";

export default function useStarRating(totalStar) {
  const [stars, setStars] = useState(totalStar);
  const [hoverd, setHovered] = useState(-1);
  const [rated, setRated] = useState(-1);

  const handleSetRated = (value) => {
    setRated(value);
  };
  const handleSetHovered = (value) => {
    setHovered(value);
  };

  const handleReset = () => {
    setRated(-1);
    setHovered(-1);
  };

  return {
    stars,
    hoverd,
    rated,
    handleSetRated,
    handleSetHovered,
    handleReset,
  };
}
