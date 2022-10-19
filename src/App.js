import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./Layout/Layout";
import Canvas from "./components/Canvas/Canvas";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={''} element={<Layout/>}>
                    <Route index element={<Canvas/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
