import React from 'react';
import axios from 'axios';

/**This is component for api calling */
class AxiosGet extends React.Component {
    state = {
        postsResponse: null,
        error: null,
        name: "Gopal",
        employees: [
            {id: 1, name: "Gopal", sal: 10},
            {id: 2, name: "Harsh", sal: 20}
        ]
    }
    /**http get request */
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log("response: ", response.data)
            this.setState({
               postsResponse: response.data 
            })
        })
        .catch((error) => {
            this.setState({
                error: error
            })
        })
    }
    render() {
        const { employees, postsResponse } = this.state
        let employesJSX = employees.map((obj) => {
                return obj.name
            })

        let posts;
        if (postsResponse) {
            posts = postsResponse.map((postObj) => {
                return <div>{ postObj.title }<br /></div>
            })
            
            console.log("posts", posts)
        } 

        return (
            <div>
                <div>
                    { employesJSX }
                    { posts }
                </div>
                AxiosGet component
            </div>
        )
    }
}

export default AxiosGet;