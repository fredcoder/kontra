import React, { Component } from 'react';
import './styles.css';

class Clothing extends Component {

    state = {
        tshirtItems: [
            {
                image: "https://res.cloudinary.com/teepublic/image/private/s--yJhvDO6S--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829018:production:blanks:ekerz3afkzxin2pgqj8h,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1530014020/production/designs/2828308_0.jpg",
                name: "Graffiti T-Shirt",
                price: "$30.000"
            },
            {
                image: "https://quantumboutique.com/wp-content/uploads/2021/03/1757327-7.jpg",
                name: "Black & White",
                price: "$30.000"
            },
            {
                image: "https://res.cloudinary.com/teepublic/image/private/s--yJhvDO6S--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829018:production:blanks:ekerz3afkzxin2pgqj8h,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1530014020/production/designs/2828308_0.jpg",
                name: "Graffiti T-Shirt",
                price: "$30.000"
            },
            {
                image: "https://quantumboutique.com/wp-content/uploads/2021/03/1757327-7.jpg",
                name: "Black & White",
                price: "$30.000"
            },
            {
                image: "https://res.cloudinary.com/teepublic/image/private/s--yJhvDO6S--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829018:production:blanks:ekerz3afkzxin2pgqj8h,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1530014020/production/designs/2828308_0.jpg",
                name: "Graffiti T-Shirt",
                price: "$30.000"
            },
            {
                image: "https://quantumboutique.com/wp-content/uploads/2021/03/1757327-7.jpg",
                name: "Black & White",
                price: "$30.000"
            },
        ],
        jacketItems: [
            {
                image: "https://cdn.shopify.com/s/files/1/2309/3869/products/129991_600x600.jpg",
                name: "Graffiti Style",
                price: "$140.000"
            },
            {
                image: "https://cdn.shopify.com/s/files/1/1316/6239/products/Graffiti_Jacket2_1200x1200.png",
                name: "Street Style",
                price: "$140.000"
            },
            {
                image: "https://cdn.shopify.com/s/files/1/2309/3869/products/129991_600x600.jpg",
                name: "Graffiti Style",
                price: "$140.000"
            },
            {
                image: "https://cdn.shopify.com/s/files/1/1316/6239/products/Graffiti_Jacket2_1200x1200.png",
                name: "Street Style",
                price: "$140.000"
            },
            {
                image: "https://cdn.shopify.com/s/files/1/2309/3869/products/129991_600x600.jpg",
                name: "Graffiti Style",
                price: "$140.000"
            },
            {
                image: "https://cdn.shopify.com/s/files/1/1316/6239/products/Graffiti_Jacket2_1200x1200.png",
                name: "Street Style",
                price: "$140.000"
            },
        ]
    }

    render() {

        let { tshirtItems, jacketItems } = this.state;

        return (<main>
            <div className="clothing-content">
                <div className="clothing-title">
                    <h2>T-Shirts</h2>
                </div>
                <div className="clothing-grid">
                    {tshirtItems.map(item =>
                        <div className="clothing-item">
                            <img src={item.image} alt={item.name} />
                            <div>
                                <h4>{item.name}</h4>
                                <p>{item.price}</p>
                            </div>
                            <button className="add-to-cart-button">
                                Add to cart
                        </button>
                        </div>
                    )}
                </div>
                <div className="clothing-title">
                    <h2>Bomber Jackets</h2>
                </div>
                <div className="clothing-grid">
                    {jacketItems.map(item =>
                        <div className="clothing-item">
                            <img src={item.image} alt={item.name} />
                            <div>
                                <h4>{item.name}</h4>
                                <p>{item.price}</p>
                            </div>
                            <button className="add-to-cart-button">
                                Add to cart
                        </button>
                        </div>
                    )}
                </div>
            </div>
        </main>)
    }
}

export default Clothing;