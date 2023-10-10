import React from "react";
import { Landing } from "./components/Landing";
import { Provider } from "react-redux";
import { configStore } from "./state/store/configStore";

function App() {

    const myStore=configStore()

  return (
      <React.Fragment>
        <Provider store={myStore}>
          <Landing/>
        </Provider>      

      </React.Fragment>
  );
}

export default App;
