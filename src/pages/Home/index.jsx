import React, { useCallback, useEffect, useState } from "react";
import ItemList from "../../components/ItemList";
import { GrPrevious,  GrNext } from "react-icons/gr";

import api from "../../services/api";
import "./styles.css";
import axios from "axios";

const Home = () => {
  const [listPokemons, setListPokemons] = useState([]);
  const [page, setPage] = useState({});

  const fetchPokemons = useCallback(async () => {
    try {
      let { data } = await api.get("/pokemon");
      setListPokemons(data.results);
      setPage({ previous: data.previous,  next: data.next, count: data.count });    
    } catch (e) {
      alert("Ocorreu um erro ao carregar dados");
    }
  }, [setListPokemons, setPage]);

  const changePageList = useCallback(
    async (type) => {
      console.log(JSON.stringify(page))

      let url;
      if (type === "next") url = page?.next;
      else if (type === "previous") url = page?.previous;

      if (!url) return;

      const axiosUrl = axios.create({
        baseURL: url,
      });

      try {
        let { data } = await axiosUrl.get("");
        setListPokemons(data.results);
      setPage({
        previous: data.previous,
        next: data.next,
        count: data.count,
      });    
      } catch (e) {

        alert(e);
      }
    },
    [setListPokemons, setPage, page]
  );

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return (
    <>
      <div className="container">
        {listPokemons.map((item, index) => (
          <ItemList
            key={index}
            description={item.name}
            onClick={() => {}}
          ></ItemList>
        ))}
      </div>
        <div className="pagination">
          <GrPrevious 
            onClick={() => changePageList("previous")}
          />
          Total Itens: {page.count}
          <GrNext
            onClick={() => changePageList("next")}
          />
        </div>
    </>
  );
};

export default Home;
