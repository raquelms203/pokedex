import React, { useCallback, useEffect, useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { useNavigate} from "react-router-dom";
import axios from "axios";

import ItemList from "../../components/ItemList";
import api from "../../services/api";
import "./styles.css";
import { useDispatch } from "react-redux";
import { select } from "../../store/pokemon/reducer";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [listPokemons, setListPokemons] = useState([]);
  const [page, setPage] = useState({});
  const [index, setIndex] = useState(1);

  const fetchPokemons = useCallback(async () => {
    try {
      let { data } = await api.get("/pokemon");
      setListPokemons(data.results);
      setPage({ previous: data.previous, next: data.next, count: data.count });
    } catch (e) {
      alert("An error occurred");
    }
  }, [setListPokemons, setPage]);

  const getUrlFromType = useCallback((type) => {  
    let url;
     if (type === "next") {
       if (page.next) {
         url = page.next;
         setIndex(index + 1);
       }
     } else if (type === "previous")
       if (page.previous && index > 1) {
         url = page.next;
         setIndex(index - 1);
       }

    return url;
  }, [page, index, setIndex])

  const changePageList = useCallback(
    async (type) => {
      let url = getUrlFromType(type);
      if(!url) return;

      try {
        let { data } = await axios({
          method: "get",
          url,
        });
        setListPokemons(data.results);
        setPage({
          previous: data.previous,
          next: data.next,
          count: data.count,
        });
      } catch (e) {
        alert("An error occurred");
      }
    },
    [setListPokemons, setPage, getUrlFromType]
  );

  const handleItemClick = (async (url) => {  
     let { data } = await axios({
          method: "get",
          url,
        });
    dispatch(select(data));
    navigate("/pokemon")
  })

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
            onClick={()=> handleItemClick(item.url)}
          ></ItemList>
        ))}
      </div>
      <pre className="pagination">
        <GrPrevious onClick={() => changePageList("previous")} />
        Page: {index}{"\n"}
        Total Itens: {page.count}
        <GrNext onClick={() => changePageList("next")} />
      </pre>
    </>
  );
};


export default Home;

