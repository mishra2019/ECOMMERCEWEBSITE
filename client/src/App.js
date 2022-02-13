import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./components/cart/Cart";
import DetailView from "./components/product/DetailView";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import ContextProvider from "./context/ContextProvider";
import TemplateProvider from "./templates/TemplateProvider";
import { Box } from "@material-ui/core";
function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{marginTop:55}}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/product/:id">
                <DetailView />
              </Route>
            </Switch>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
