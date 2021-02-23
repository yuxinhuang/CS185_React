//text.js
import React, {Component} from 'react';
import '../App.css';

class Text extends Component{
    render() {
        return(
            <div style={{padding:'15px'}}>
               <form>
                   <label for = "fname">First name:</label>
                   <br/>
                   <input type="text" id = "fname" value="Jinesh" size="20"/>
                   <br/>
                   <label for="lname">Last name:</label>
                   <br/>
                   <input type="text" id = "lname" value="Jhonsa" size="20" />
                   <br/>
                   <br/>
                   <input type="radio" style={{margin: '10px'}}/><label for="ave">Avengers</label>
                   <br/>
                   <input type="radio" style={{margin: '10px'}}/><label for="dn">Dark Knight</label>
                   <br/>
                   <input type="radio" style={{margin: '10px'}}/><label for="tn">Tenet</label>
               </form>
               <br/>
               <button>Done</button>

            </div>
        );
    }
}
export default Text;