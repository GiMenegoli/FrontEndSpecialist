import './App.css';

function App() {
  let result = Math.round(Math.random()*100);
  let result2 = "";
  if(result%2 === 0){
    result2 = "Par"
  }else{
    result2 = "Impar"
  }
   return (
    <div className="App">
     <h1>
       Hello World!!!
     </h1>
     <p>
       {/* Random Text {result} */}
       Valor: {result} = {result2}

     </p>
    </div>
  );
}


export default App;
