import { MdCatchingPokemon } from "react-icons/md";
import "./styles.css";


const ItemList = ({description, onClick}) => (
  <div className="item-list" onClick={onClick}>
    <MdCatchingPokemon size={60} color="firebrick"/>
    <div className="item-text">
      <span className="description">{description}</span>
      <span className="action">See more</span>
    </div>
  </div>
);

export default ItemList