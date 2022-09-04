
import { Provider } from "react-redux";
import RoutesApp from "./routes/index";
import "./App.css"

import store from "./store"; 

function App() {
  return (
   <Provider store={store}>
    <RoutesApp />
   </Provider>
  );
}

export default App;
