import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../../../axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/_album.scss";
type AlbumProps = {
  name: string;
  images: [{ url: string }];
  artists: [{ name: string; external_urls: { spotify: string } }];
  release_date: string;
  total_tracks: number;
};
const Album = () => {
  const [albumDetail, setAlbumDetail] = useState<AlbumProps>();
  let navigate = useNavigate();
  let { albumId } = useParams();

  useEffect(() => {
    axios.get(`/albums/${albumId}`).then((response) => {
      console.log(response);

      setAlbumDetail(response.data);
    });
  }, [albumId]);

  return (
    <div>
      <FontAwesomeIcon icon={faChevronLeft} onClick={() => navigate("/")} />
      {albumDetail && (
        <div className="album">
          <div
            className="album__art"
            style={{
              backgroundImage: `url(${albumDetail.images[0].url})`,
            }}
          />
          <div>
            <div className="album__title">ALBUM</div>
            <div className="album__name">{albumDetail.name}</div>
            <div>
              {albumDetail.artists.map((artist) => (
                <a
                  href={artist.external_urls.spotify}
                  target="_blank"
                  rel="noreferrer"
                >
                  {artist.name}
                </a>
              ))}
              <span>{` - ${albumDetail.release_date.split("-")[0]}`}</span>
              <span>{` - ${albumDetail.total_tracks} songs`}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Album;
