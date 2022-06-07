import React from "react";
import { Link } from "react-router-dom";
import "../styles/_discover-item.scss";

export type DiscoverItemProps = {
  images?: [
    {
      url: string;
    }
  ];
  icons?: [
    {
      url: string;
    }
  ];
  name: string;
  id: string;
};

const DiscoverItem = ({ images, icons, name, id }: DiscoverItemProps) => {
  return (
    <Link to={`album/${id}`}>
      <div className="discover-item animate__animated animate__fadeIn">
        <div
          className="discover-item__art"
          style={{
            backgroundImage: `url(${
              images ? images[0].url : icons && icons[0].url
            })`,
          }}
        />
        <p className="discover-item__title">{name}</p>
      </div>
    </Link>
  );
};

export default DiscoverItem;
