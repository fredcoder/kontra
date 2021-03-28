import React, { Component } from 'react';
import './styles.css';

class Clothing extends Component {

    render() {

        return (<main>
            <div className="clothing-content">
                <div className="clothing-grid">
                    <div className="clothing-item">
                        <img src={"https://res.cloudinary.com/teepublic/image/private/s--yJhvDO6S--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829018:production:blanks:ekerz3afkzxin2pgqj8h,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1530014020/production/designs/2828308_0.jpg"} alt="" />
                        <div className="clothing-item">
                            <h4>Graffiti T-Shirt</h4>
                            <p>$40.000</p>
                        </div>
                    </div>
                    <div className="clothing-item">
                        <img src={"https://res.cloudinary.com/teepublic/image/private/s--yJhvDO6S--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829018:production:blanks:ekerz3afkzxin2pgqj8h,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1530014020/production/designs/2828308_0.jpg"} alt="" />
                        <div className="clothing-item">
                            <h4>Graffiti T-Shirt</h4>
                            <p>$40.000</p>
                        </div>
                    </div>
                    <div className="clothing-item">
                        <img src={"https://res.cloudinary.com/teepublic/image/private/s--yJhvDO6S--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829018:production:blanks:ekerz3afkzxin2pgqj8h,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1530014020/production/designs/2828308_0.jpg"} alt="" />
                        <div className="clothing-item">
                            <h4>Graffiti T-Shirt</h4>
                            <p>$40.000</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>)
    }
}

export default Clothing;