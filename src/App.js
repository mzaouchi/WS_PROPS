import './App.css';
import Test from './Components/Test';
import aziz from './1.jpg'
function App() {
  var name = 'Mamino'
  let age = 20
  const pays = ['Tunisie','France','Palastine','Japan']
  var user = {nameU : 'Raslen', age:'27', address : {street : 'AinZaghouen',cp:2045}}
  const handleAlert=()=> alert('Hello Aziz')
  const handleName=(a)=> alert(`Hello ${a}`)
  const show = false
  return (
    <div>
      <h1>Workshop Props</h1>
      <Test name={name} age={age} pays={pays} user={user} handleAlert={handleAlert} handleName={handleName} show={show}>
        <h1>GOMYCODE</h1>
        <h2>FULLSTACKJS</h2>
        <img src={aziz} alt='NotFound'/>
      </Test>
    </div>
  );
}

export default App;
