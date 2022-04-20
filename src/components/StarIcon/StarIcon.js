import { useState } from "react";
import "./StarIcon.css";

export default function StarToggle() {
  const [fav, setFav] = useState(false);

  let StarIcon = fav
    ? "https://cdn-icons-png.flaticon.com/512/1828/1828614.png"
    : "https://cdn-icons-png.flaticon.com/512/1828/1828970.png";

  function toggleFav() {
    setFav(!fav);
  }

  return (
    <div>
      <img onClick={toggleFav} src={StarIcon} className="star" alt="" />
    </div>
  );
}

// export default function StarToggl{
//   isFavorite: false
// }
// const [fav, setFav] = useState(false);
// .isFavorite

// let StarIcon = fav
//   ? "https://cdn-icons-png.flaticon.com/512/1828/1828614.png"
//   : "https://cdn-icons-png.flaticon.com/512/1828/1828970.png";

// function((prevCount) => ({
//     ...prevCount,
//     isFavorite: !prevCount.isFavorite
//   }))eFav() {
//   setFav(!fav);
// }