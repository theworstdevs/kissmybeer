import React, {Component} from 'react';
import Menu from "./components/Menu";
import Homepage from "./components/Homepage";
import GoogleMaps from "./components/GoogleMaps";


class App extends Component {

    render() {
        return (
            <div>
                <Menu/>
                <Homepage/>
                <GoogleMaps/>
            </div>
        );
    }

}

export default App;
