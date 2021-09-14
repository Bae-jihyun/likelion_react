import "./App.css";
import Counter from "./component/Counter/Counter";
import Header from "./component/Layout/Header/Header";
import Body from "./component/Layout/Body/Body";
import Footer from "./component/Layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
