import React, { Component } from "react";
import './../../component/YouTubeComponent/YouTubeComponent';
import Youtube from "./../../component/YouTubeComponent/YouTubeComponent";

class Home extends Component {
    render() {
        return <div>
            <p>Youtube Component</p>
            <Youtube time="7.12" title="wsq" desc="desc"/>
            <Youtube time="7.12" title="wsq2" desc="desc"/>
            <Youtube time="7.12" title="wsq3" desc="desc"/>
            <Youtube time="7.12" title="wsq4" desc="desc"/>
            <Youtube time="7.12" title="wsq5" desc="desc"/>
        </div>;
    }
}

export default Home;