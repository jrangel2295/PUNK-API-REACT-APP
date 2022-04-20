import "./Item.css";
import StarIcon from "../StarIcon/StarIcon";

export default function Item(props) {
  function handleClick(e, id) {
    alert(props.item.status);
  }

  return (
    <div className="mainPic">
      <ul>
        <img alt="" className="image" src={props.item.image} />
        <br></br>
        <h1 className="list-name">{props.item.name}</h1>
        <button
          className="btn-info"
          onClick={(e) => handleClick(e, props.item.id)}
        >
          Check Status
        </button>
        <StarIcon />
      </ul>
    </div>
  );
}