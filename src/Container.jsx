import { Header } from "./Widget";
import {Home} from "./Pages";
import { Details } from "./Pages";
import s from "./assets/styles/global.scss";
import Router from "./Components/Router/Router";

const Container = () => {
  return (
    <div className="container">
          <Header />
          {/*<Home />*/}
          {/*<Details/>*/}
          <Router/>
    </div>
  );
};

export default Container;
