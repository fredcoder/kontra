import React, { Component } from 'react';
import kontraVideo from '../../assets/video/kontraVideo.mp4';
import { FacebookProvider, Comments } from 'react-facebook';
import './styles.css';

class Home extends Component {

    render() {

        return (<main>
            <div className="banner-image">
                <video playsInline autoPlay muted loop preload="auto" src={kontraVideo}>
                    {/* <source src={kontraVideo} type="video/mp4"/>
                            Your browser does not support the video tag. */}
                </video>
                {/* <img src={"https://scontent.fmel6-1.fna.fbcdn.net/v/t1.0-9/90601288_3099768216742507_3934678217708797952_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=973b4a&_nc_ohc=gSTnPvleiLIAX8yBAtd&_nc_ht=scontent.fmel6-1.fna&oh=b0b0005f3f7a8856294deaab84346930&oe=60858229"} alt="graffiti" /> */}
            </div>
            <div className="title">
                <h1></h1>
            </div>
            <div className="content">

                <h3>What is Lorem Ipsum?</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <h3>Why do we use it?</h3>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
                <h3>Where does it come from?</h3>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </p>
                <h3>Where can I get some?</h3>
                <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                </p>
                <FacebookProvider appId="123456789">
                    <Comments href="http://www.facebook.com" />
                </FacebookProvider>
            </div>
        </main>)
    }
}

export default Home;