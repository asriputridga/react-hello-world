import React from "react";
import './YouTubeComponent.css';

// row function, stateless
const Youtube = (props) => {
    return <div className="youtube-warpper">
        <div className="img-thumb">
            <img src="https://cdn0-production-images-kly.akamaized.net/-z8K5RNqZepptCavmsfkYcjLlBs=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3171555/original/011415500_1594032035-garrett-patz-49jxqpCMkq8-unsplash.jpg"></img></div>
        <p className="time">{props.time}</p>
        <p className="title">{props.title}</p>
        <p className="desc">{props.desc}</p>
    </div>
}

Youtube.defaultProps = {
    time: '00.00',
    title: 'asri',
    desc: 'hmm'
}
export default Youtube;