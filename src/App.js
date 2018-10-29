import React, {Component} from 'react';
import ProductPage from './components/ProductPage';
import Menu from "./components/Menu";

class App extends Component {

    render() {
        return (
            <div>
                <Menu/>
                <ProductPage/>
            </div>
        );
    }

}

export default App;
