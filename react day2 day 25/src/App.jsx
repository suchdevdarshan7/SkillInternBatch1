import Navbar from "./Components/Navbar";


let dataofpeople = [
  {
    id:1,
    name: "Sambit kumar",
  },
  {
    id:2,
    name: "Ujwala",
  },
  {
    id:3,
    name: "abhilash",
  },
  {
    id:4,
    name: "rajesh",
  },
  {
    id:5,
    name: "kousik",
  },
  {
    id:4,
    name: "gokul prassna",
  }
]


function App() {
    const userlogin = true;
  return (
    <div>
    {
      userlogin && <Navbar/> 
    }
    {
      dataofpeople.map((element)=>{
        return <li>{element.name}</li>
      })
    }
    </div>
  )
}

export default App


let 