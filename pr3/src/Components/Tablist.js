//Tablist.js
import React, {Component} from 'react';
import Tab from './Tab';

class Tablist extends Component{
    render(){
        return (
            this.props.tabs.map((itab) =>
            <Tab tab={itab} 
            ctab={this.props.ctab}
            activetab={this.props.activetab} />

            )
        )
    }
}
export default Tablist;