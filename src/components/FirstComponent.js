/**
 * function based component
 */
import React from 'react';
import MySecondComponet from './SecondComponet';

var MyFunComponent = () => {
    return (
        <div>
            This is MyFunComponent <br />
            <MySecondComponet />
        </div>
    )
}

export default MyFunComponent;


export var ArrowFun2 = () => <div>This is seccond component</div>