import React  from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import { useSelector } from "react-redux";
import { selectPokemon } from "../../store/pokemon/reducer";
import { GrPrevious } from "react-icons/gr";

const PokemonDetail = () => {
  const navigate = useNavigate();
  const pokemon = useSelector(selectPokemon);


  return (
    <div class="back-button" onClick={() => navigate("/")}>
      <GrPrevious />
      Back
    <div class="container-pokemon">
      <div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src={pokemon.sprites?.front_default}
              alt="Front pokemon"
              height={200}
            />
          </div>
          <div class="flip-card-back">
            <img
              src={pokemon.sprites?.back_default}
              alt="Back pokemon"
              height={200}
            />
          </div>
        </div>
      </div>
      <div className="card-text">
        <div className="text-wrapper">
          <div className="text-title">Name: </div>
          <div className="text-description">{pokemon.name}</div>
        </div>
        <div className="text-wrapper">
          <div className="text-title">Height: </div>
          <div className="text-description">{pokemon.height}</div>
        </div>
        <div className="text-wrapper">
          <div className="text-title">Weight: </div>
          <div className="text-description">{pokemon.weight}</div>
        </div>
        <br/>
        <div className="text-wrapper">
          <div className="text-title">
            Abilities:
            {pokemon.abilities.map((item, index) => (
              <div className="text-description ">
                <br />
                {index + 1}: {item.ability.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PokemonDetail;
