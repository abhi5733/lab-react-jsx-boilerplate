import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }
 
 datas = this.imageData()

 render() {
return(
  <div id="display" > {
  this.datas.map((el)=>{
    return <img src={el.img} />
  })}
  </div>
)


 }

 

  // code here
}
