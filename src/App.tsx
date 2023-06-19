import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const calcAge = (e:any) => {
    e.preventDefault();
    if (date) {
      const a:any=new Date(Date.now())
      const b:any=new Date(date)
      const t=Math.floor(Number(a - b)/(1000*60*60*24*365));
      setAge(t);
    }
  };

  const [date, setDate]: any = useState(Date.now());
  const [age, setAge]= useState(0);

  useEffect(() => console.log(Date.now()-date),[date])
  
  return (
    <div>
      <h1>Age Calculator</h1>
      <p>Enter your date of birth</p>
      <form onSubmit={calcAge} >
        <input type="date"  value={date} onChange={(e) => setDate(e.target.value)}/><br />
        <input type="submit" value={"Calculate Age"} style={{marginTop: '1rem', padding: '0.5rem 1rem', cursor:'pointer'}}/>
      </form>
      {age &&
        <h3>You are {age} years old</h3>}
    </div>
  );
}

export default App;
