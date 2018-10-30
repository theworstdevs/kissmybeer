import React, {Component} from 'react';
import ProductPage from './components/ProductPage';
import Menu from "./components/Menu";
import Catalogue from "./components/Catalogue"

class App extends Component {

    render() {
        return (
            <div>
                <Menu/>
                <Catalogue/>
            </div>
        );
    }

}

export default App;
