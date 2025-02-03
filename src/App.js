import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div>
      <Provider>
        <AppRouter/>
      </Provider>
    </div>
  );
}

export default App;
