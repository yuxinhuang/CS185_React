//table.js
import React, {Component} from 'react';
import '../App.css';
class Table extends Component{
    render(){
        const pstyle={
            fontSize: "25px",
            fontWeight: "bold"

        };
        return(
            <div style={{padding:"15px"}}> 
           <p style={pstyle}>Projects</p>
           <br/>
           <table>
               <tr>
                   <th>Name</th>
                   <th>Details</th>
                   <th>Year</th>
               </tr>
               <tr>
                   <td><a href="https://ucsb.zoom.us/j/81378510893?pwd=Wnptd09KdFhlVTE1M3YvTk9aQWwrQT09">ASAM1</a></td>
                   <td><p>Historical survey of Asian Americans in the United States from 1850 to the present. Topics include: Immigration patterns, settlement and employment, race and gender relations, community development, and transnational connections.</p></td>
                   <td><p>2020</p></td>
               </tr>
               <tr>
                <td><a href="https://ucsb.zoom.us/j/82350220625?pwd=QjVRTCt0MkI4akxQdGxwNEhISE1wQT09">CHIN82</a></td>
                <td><p>This course, taught in English, surveys an archive of seminal short fiction, novellas, novels, and poems that tell the story of China and the Chinese from the end of the Qing dynasty to the present. What has been the place of literature in China in the modern era? What vision of modern China do we find in its literature? How, moreover, does literature subvert the national narrative? Through literature as a window on the history of modern China, students will gain a better understanding of Chinese history and culture with regard to its social reform, revolution, war, cultural revolution, cultural revival, and economic growth.</p></td>
                <td><p>2021</p></td>
                </tr>
           </table>
        </div>
        );
    }

}
export default Table;