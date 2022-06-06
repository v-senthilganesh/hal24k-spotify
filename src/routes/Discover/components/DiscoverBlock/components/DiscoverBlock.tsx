import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import DiscoverItem, { DiscoverItemProps } from "./DiscoverItem";
import "../styles/_discover-block.scss";

const scrollContainer = (id: string, isNegative = false) => {
  return () => {
    const scrollableContainer = document.getElementById(id);
    if (scrollableContainer) {
      const amount = isNegative
        ? -scrollableContainer.offsetWidth
        : scrollableContainer.offsetWidth;

      scrollableContainer.scrollLeft = scrollableContainer.scrollLeft + amount;
    }
  };
};

type DiscoverBlockProps = {
  text: string;
  id: string;
  data: Array<DiscoverItemProps>;
};

const DiscoverBlock = ({ text, id, data }: DiscoverBlockProps) => {
  return (
    <div className="discover-block">
      <div className="discover-block__header">
        <h2>{text}</h2>
        <span />
        {data.length ? (
          <div className="animate__animated animate__fadeIn">
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={scrollContainer(id, true)}
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={scrollContainer(id)}
            />
          </div>
        ) : null}
      </div>
      <div className="discover-block__row" id={id}>
        {data.map(({ image, name }) => (
          <DiscoverItem key={name} image={image} name={name} />
        ))}
      </div>
    </div>
  );
};

export default DiscoverBlock;
