import React, {Component} from 'react';
import '../App.scss';

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "1"
        }
    }

    changeDescription = () => {
        if (this.state.description === "1") {
            this.setState({
                description: "2"
            })
        } else {
            this.setState({
                description: "1"
            })
        }
    }

    render() {
        switch (this.state.description) {
            case "1":
                return (
                    <section className="container flex">
                        <div className="product-page">
                            <div className="product-page-photo">
                                <img className="product-image"
                                     src="https://www.thepipstop.co.uk/images/imperial-stout-p498-414_image.jpg"/>
                            </div>
                            <div className="product-page-description">
                                <h1>Samuel Smith Impreial Stout</h1>
                                <button className="product-page-details-summary-btn"
                                        onClick={this.changeDescription}>Opis
                                </button>
                                <div className="product-page-details">
                                    <p>Uwarzone przez Samuel Smith Old Brewery, z miasta Tedcaster w hrabstwie North
                                        Yorkshire w Wielkiej Brytanii. Browar ten powstał w roku 1758. Jak sama nazwa
                                        wskazuje jest to przedstawiciel gatunku Imperial Stout. Dostępne w butelkach o
                                        pojemności 0,355 oraz 0,55l. Ten charakterystyczny gatunek piwa pierwotnie
                                        warzony był w celu wspomagania organizmu w niekorzystnych warunkach pogodowych w
                                        carskiej Rosji. Imperial Stout był ulubieńcem rosyjskiej szlachty, która
                                        gustowała w najlepszym jedzeniu i piciu z całego świata. Co ciekawe, piwo to
                                        posiada dwa medale, które otrzymało w konkursach organizowanych bardzo dawno
                                        temu. Jest to złoty medal na międzynarodowym piwnym pokazie w Leeds w roku 1896,
                                        oraz srebrny medal na międzynarodowym pokazie piwnym Prize and Bottled Ale, w
                                        roku 1930.</p>
                                </div>
                            </div>
                            <div className="product-page-add">
                                <form className="product-add-form">
                                    <input type="number" placeholder="Ilość" min="1"/>
                                    <h2>12,99PLN</h2>
                                    <button>Do koszyka</button>
                                </form>
                            </div>
                        </div>
                        <div className="similar-products">
                            <button className="carousel-nav-left-btn">Next</button>
                            <div className="carousel-viewport"></div>
                            <button className="carousel-nav-right-btn">Prev</button>
                        </div>
                    </section>
                );
            case "2":
                return (
                    <section className="container flex">
                        <div className="product-page">
                            <div className="product-page-photo">
                                <img className="product-image"
                                     src="https://www.thepipstop.co.uk/images/imperial-stout-p498-414_image.jpg"/>
                            </div>
                            <div className="product-page-description">
                                <h1>Samuel Smith Impreial Stout</h1>
                                <div className="product-page-details-buttons">
                                    <button className="product-page-details-summary-btn"
                                            onClick={this.changeDescription}>Opis
                                    </button>
                                </div>
                                <div className="product-page-details">
                                    <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
                                </div>
                            </div>
                            <div className="product-page-add">
                                <form className="product-add-form">
                                    <input type="number" placeholder="Ilość"/>
                                    <h2>12,99PLN</h2>
                                    <button>Do koszyka</button>
                                </form>
                            </div>
                        </div>
                        <div className="similar-products">
                            <button className="carousel-nav-left-btn">Next</button>
                            <div className="carousel-viewport"></div>
                            <button className="carousel-nav-right-btn">Prev</button>
                        </div>
                    </section>
                );
        }
    }
}

export default ProductPage;