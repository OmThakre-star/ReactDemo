import logo from "./logo.svg";
import "./App.css";

//JSX JAVASCRIPT XML
//JS+HTML
//return JSX.
//JSX must be wrapped within() if it is multiline

function App() {
  let list=["Hello","Hello"];
  const addNewHello=()=>{
    alert("Add new Hello logic we will come here...");
    list.push("hello");
    console.log(list);
  }
  //View
  return (
   <div>
     
      <h1> Working with Events and List</h1>
       <input type="button" value="Say Hello" onClick={addNewHello} />
       {list.map((item)=>{
         return<h3>{item}</h3>
       })}
    
   </div>
  );
}


export default App;
