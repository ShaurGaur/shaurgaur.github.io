import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import TopNav from "./components/TopNav";

function App() {
    return (
        <div className="App">
            {/* <TopNav /> */}
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </div>
    );
}

export default App;
