import React, { Component } from 'react';

import Menubar from '../../components/MenuBar/MenuBar';
class Layout extends Component {

    componentDidUpdate(){
        console.log("layotu did update")
        
    } 
    render() {
        return (
            <div>
                <Menubar/>
                <main>
                    {this.props.children}
                </main>
                
            </div>
        );
    }
}

export default Layout;