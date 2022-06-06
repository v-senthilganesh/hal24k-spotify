import React from "react";
import "../styles/_discover-item.scss";

export type DiscoverItemProps = {
  image: {
    url: string;
  };
  name: string;
};

const DiscoverItem = ({ image, name }: DiscoverItemProps) => {
  return (
    <div className="discover-item animate__animated animate__fadeIn">
      <div
        className="discover-item__art"
        style={{ backgroundImage: `url(${image.url})` }}
      />
      <p className="discover-item__title">{name}</p>
    </div>
  );
};

export default DiscoverItem;
