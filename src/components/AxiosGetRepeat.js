import React from 'react';
import axios from 'axios';

class AxiosGetRepeat extends React.Component {
    state = {
        albums: null,
        error: null,
        name: "Gopal"
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then((response) => {
            this.setState({
                albums: response.data
            })
        })
        .catch((error) => {
            this.setState({
                error: error 
            })
        })
    }
    render() {
        const { albums } = this.state 

        let albumsJSX;
        if (albums) {
            console.log("albums: ", albums)
            albumsJSX = albums.map((album) => {
                return <div>{album.id} {album.title}<br /></div>
            })
        }

        return(
            <div>
              {albumsJSX}
            </div>
        )
    }
}

export default AxiosGetRepeat;