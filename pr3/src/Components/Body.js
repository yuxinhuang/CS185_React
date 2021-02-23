//Body.js

import React, {Component} from 'react';
import Text from './text'
import Image from './image'
import Video from './video'
import Table from './table';
import Email from './email';

class Body extends Component{
    render(){
        var displaycontent = () => {
            var activetab = this.props.activetab;
            if (activetab == 1){
                return <Text/>
            }else if(activetab == 2){
                return <Image/>
            }else if (activetab == 3){
                return <Video/>
            }else if (activetab == 4){
                return <Table/>
            }else{
                return <Email/>
            }
        }
        return (displaycontent())
    }

}
export default Body;