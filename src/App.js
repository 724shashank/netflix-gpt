import "/src/App.css"
import Body from "/src/components/Body"
import { Provider } from "react-redux";
import store from "./utils/redux/store";
const App = () => {
  return (
    <Provider store={store}>
    <div>
     <Body />
    </div>
    </Provider>
  );
};
export default App;
