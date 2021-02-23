//video.js
import React, {Component} from 'react';
import '../App.css';
class Video extends Component{
    on(event){
        document.getElementById("overlayVid").style.display = "block";
        const overlay = document.querySelector("#overlayVid");
        var vid = document.createElement("VIDEO");
        vid.setAttribute("src", event.target.src);
        vid.setAttribute("width", "50%");
        vid.setAttribute("height", "50%");
        vid.setAttribute("style", "display: block;");
        vid.setAttribute("controls", "controls");
        vid.setAttribute("style", "left:50%; top:50%; transform: translate(-50%, -50%); position:absolute; ");
       
        overlay.appendChild(vid);
    }
    off(){
        document.getElementById("overlayVid").style.display = "none";
        const overlay = document.querySelector("#overlayVid");
        overlay.removeChild(overlay.lastChild);
    }
    render(){
        return(
            <>
            <div id="overlayVid" onClick={this.off}></div>
            <div className="grid-container">
            <div className="grid-item">
                <video width="300" height="300" onClick = {this.on} controls>
                    <source src= {process.env.PUBLIC_URL + "/Videos/v1.mp4"} type="video/mp4"/>
                </video>
                
            </div>
            <div className="grid-item">
                <video width="300" height="300" onClick = {this.on} controls>
                    <source src={process.env.PUBLIC_URL + "/Videos/v2.mp4"} type="video/mp4"/>
                </video>
            </div>
            <div className="grid-item">
                <video width="300" height="300" onClick = {this.on} controls>
                    <source src={process.env.PUBLIC_URL + "/Videos/v3.mp4"} type="video/mp4"/>
                </video>
            </div>
            <div className="grid-item">
                <video width="300" height="300" onClick = {this.on} controls>
                    <source src={process.env.PUBLIC_URL + "/Videos/v4.mp4"} type="video/mp4"/>
                </video>
            </div>
            <div className="grid-item">
                <video width="300" height="300" onClick = {this.on} controls>
                    <source src={process.env.PUBLIC_URL + "/Videos/v5.mp4"} type="video/mp4"/>
                </video>
            </div>
            
        </div>
        </>
        );
    }
}
export default Video;