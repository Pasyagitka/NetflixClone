import "./styles/main.scss";
import { Provider } from "react-redux";
import ReactDom from "react-dom";
import App from "./components/router/App";
import store from "./storage/store";

function AppContainer() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

ReactDom.render(<AppContainer />, document.getElementById("app"));
