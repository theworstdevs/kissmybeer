import React, {Component} from 'react';
import Menu from "./components/Menu";
import Homepage from "./components/Homepage";
import GoogleMaps from "./components/GoogleMaps";
import Footer from "./components/Footer";


class App extends Component {

    render() {
        return (
            <div>
                <Menu/>
                <Homepage/>
                <GoogleMaps/>
                <Footer/>
            </div>
        );
    }

}

export default App;
