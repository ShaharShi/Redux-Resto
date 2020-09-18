import React from "react";
import { Star } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

interface IProps {
  stars: number;
  starsColor?: string;
}

export default function Rating(props: IProps) {
  const state = useSelector((state: any) => state.configReducer)
  const { starsColor } = state

  if (typeof props.stars !== "number") return <span> No rating</span>;
  const roundedStars: number = Math.ceil(props.stars);
  const numberOfStars = new Array(roundedStars).fill(true, 0);
  return (
    <div>
      {numberOfStars.map((_, index) => (
        <Star
          key={index}
          fill={starsColor || "yellow"}
          onClick={() => {}}
        />
      ))}
    </div>
  );
}
