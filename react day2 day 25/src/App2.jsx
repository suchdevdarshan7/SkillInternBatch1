import React from 'react'
import Navbar from './Components/Navbar'

let value1 = "Myname";
let value2 = "Myage";
let value3 = "MyJob";


const App = () => {
    // props ==> properties --> we use to pass properties from parent to child
    return (
        <div>
            <Navbar first={value1} second={value2} third={value3} />
        </div>

    )
}





export default App



