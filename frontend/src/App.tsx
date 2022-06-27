import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { MenuStatusContextProvider } from "./context/MenuStatusContext";
import { client } from "./lib/apolo";
import { Router } from "./Router";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <MenuStatusContextProvider>
          <Router/>
        </MenuStatusContextProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App
