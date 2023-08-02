import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
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

let Data = imageData()

function App() {
  return(
  <div id="display" > {
 Data.map((el)=>{
 return <img src={el.img} />
})}
  </div>
  )
}

export default App;



