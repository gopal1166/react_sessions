import React, { Component } from 'react';
import MySecondComponet from './SecondComponet';

class MyFirstClassComponent extends Component {
    /**
     * To manage data
     * 
     */
    state = {
        name: "Gopal",
        age: 200
    }

    /**
     * one mandatory method
     */

    /**
     * create functions handlers like 
     */

     /**
      * render method will be executed automatically each and every time the 
      * component called
      */
    render() {
        /**this is javascript */
        console.log("This is MyFirstClassComponent")
        return (
            <div>
                This my first class based Component
                <br />
                {this.state.name}
                <br />
                {this.state.age}

                <MySecondComponet name={this.state.name}/>
            </div>
        )
    }
}

export default MyFirstClassComponent;

// JSX - html + javascript
