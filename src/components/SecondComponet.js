/**
 * It's a child component
 */
import React, { Component } from 'react';

 class MySecondComponet extends Component {
    render() {
        return(
            <div>

                This is child component <br />
                {this.props.name}
            </div>
        )
    }
 }

 export default MySecondComponet;