//Tab.js
import React, {Component} from 'react';
// function Tab(props){
//     var addStyling = () => {
//         if (props.tab.id === props.activetab){
//             document.getElementById("nav").style.background='gray';}
//             //return {backgroundColor: "gray"};
//             // return{
//             // textDecoration: 'underline',
//             // textDecorationStyle: 'solid'};
//         // }else{
//         //     //return {backgroundColor:"rgb(37, 35, 35)"}
//         //     return {
//         //     };

//         // }
//     };
   
//         return(
//             <div id = 'nav' className='nav' style={this.addStyling} onClick = {props.changetab.bind(this,props.tab.id)} > 
//             {props.tab.title}
//             </div>
//         );
    
   
// }
class Tab extends Component{
    addStyling= () => {
        if (this.props.tab.id == this.props.activetab){
            //document.getElementById("nav").className='navA';
            return {backgroundColor: "gray"};
           
        }else{
            //document.getElementById("nav").className='nav';
            console.log(this.props.tab.id);
            console.log(this.props.activetab);
            
            return {};
        }
    };

    render(){
            return(
            <div className="nav" style = {this.addStyling()}
            onClick={this.props.ctab.bind(this,this.props.tab.id)}> 
            {this.props.tab.title}
            </div>
        );
        
    }
}
export default Tab;