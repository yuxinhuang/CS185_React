//image.js
import React, {Component} from 'react';
import '../App.css';
class Image extends Component{

    on(event){
        
        document.getElementById("overlayImg").style.display = "block";
        //var img = document.getElementById("overlayI");
        //img.src = event.target.src;
        const overlay = document.querySelector("#overlayImg");
        var img = document.createElement("IMG")

        img.setAttribute("src", event.target.src)
        img.setAttribute("width", "50%")
        img.setAttribute("height", "50%")
        //img.setAttribute("style", "display: block; margin:auto; position:flex; ")
        //img.setAttribute("style", "margin-left: 25%; margin-top: 25%;")
        img.setAttribute("style", "left:50%; top:50%; transform: translate(-50%, -50%); position:absolute; ")
        
       
        overlay.appendChild(img)
    }
    off(){
        document.getElementById("overlayImg").style.display = "none";
        const overlay = document.querySelector("#overlayImg");
        overlay.removeChild(overlay.lastChild);
    }

    render(){
        return(
            <div>
                
            
            <div className="grid-container">
                <div className="grid-item">
               
                    <img src={process.env.PUBLIC_URL +'/Images/img1.jpeg'} width="300" height="300" onClick={this.on}/>
                    
                </div>
                <div className="grid-item">
                    <img src={process.env.PUBLIC_URL +'/Images/img2.jpg'} width="300" height="300" onClick={this.on}/>
                </div>
                <div className="grid-item">
                    <img src={process.env.PUBLIC_URL +'/Images/img3.jpg'} width="300" height="300" onClick={this.on}/>
                </div>
                <div className="grid-item">
                    <img src={process.env.PUBLIC_URL +'/Images/img4.jpg'} width="300" height="300" onClick={this.on}/>
                </div>
                <div className="grid-item">
                    <img src={process.env.PUBLIC_URL +'/Images/img5.jpg'} width="300" height="300" onClick={this.on}/>
                </div>
                <div className="grid-item">
                    <img src={process.env.PUBLIC_URL +'/Images/img6.jpg'} width="300" height="300" onClick={this.on}/>
                </div>
        </div>
        <div id="overlayImg" onClick={this.off}></div>
        </div>
        );
    }
}
export default Image;