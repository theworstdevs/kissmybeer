import React, { Component } from 'react';
import '../App.scss';

class BeerDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "1"
        }
    }
    render() {
        return (
            <p>
                Uwarzone przez Samuel Smith Old Brewery, z miasta Tedcaster w hrabstwie North Yorkshire w Wielkiej Brytanii. Browar ten powstał w roku 1758. Jak sama nazwa wskazuje jest to przedstawiciel gatunku Imperial Stout. Dostępne w butelkach o pojemności 0,355 oraz 0,55l. Ten charakterystyczny gatunek piwa pierwotnie warzony był w celu wspomagania organizmu w niekorzystnych warunkach pogodowych w carskiej Rosji. Imperial Stout był ulubieńcem rosyjskiej szlachty, która gustowała w najlepszym jedzeniu i piciu z całego świata. Co ciekawe, piwo to posiada dwa medale, które otrzymało w konkursach organizowanych bardzo dawno temu. Jest to złoty medal na międzynarodowym piwnym pokazie w Leeds w roku 1896, oraz srebrny medal na międzynarodowym pokazie piwnym Prize and Bottled Ale, w roku 1930.
            </p>
        );
    }
}

export default BeerDescription;