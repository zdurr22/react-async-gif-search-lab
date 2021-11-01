import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends Component {
    state = {
        gifs: []
    }

    render() {
        return(
            <div> 
                <GifSearch fetchGifs={this.fetchGifs}/> 
                <GifList gifs={this.state.gifs} />  
            </div>
        )
    }
    fetchGifs = (query = "dogs") => {
     fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=kS9XK97SJNAQMfh2dDB4i6vl4oYVUufl&rating=g')
        .then(res => res.json())
        .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url}))});
        });
    }

    componentDidMount(){
        this.fetchGifs();
    }


}