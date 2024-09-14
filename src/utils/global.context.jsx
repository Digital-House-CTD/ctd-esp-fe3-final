import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { reducer } from "../reducers/reducer" 



export const ContextGlobal = createContext(undefined);
const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

export const initialState = {theme: "light", data: [], fav: lsFavs};

export const ContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  
  const url =
    "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      dispatch({ type: "GET_DENTISTS", payload: res.data });
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(state.fav));
  }, [state.fav]);


  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal); 