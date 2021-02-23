//email.js
import React, {Component} from 'react';
import '../App.css';
class Email extends Component{
    emailFunc(event){
        var e = document.getElementById("email").value ;
        //console.log(e);
        e.trim();
        if (e.search('@')===-1 || (e.endsWith('.com') === false && e.endsWith('.edu') === false)){
            document.querySelector("#meg").textContent = "Invalid email address." ;
        }else{
            document.querySelector("#meg").textContent = "Email successfully recorded." ;
        }
    
    }
    render(){
        return(
            <div style={{padding: "15px"}}>
           
            <form>
                <label for="email">Email:</label>
                <br/>
                <input type="text" id = "email" size="20" />
            </form>
            <br/>
            <button id="submit" onClick={this.emailFunc}> Submit</button>
            <p id = "meg"></p>
        </div>
        );
    }

}
export default Email;