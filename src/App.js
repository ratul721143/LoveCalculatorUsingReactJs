import React,{useState,useEffect} from 'react'
import './App.css';
import ProgressBar from './Components/ProgressBar'

function App() {
  const [tempFirstName,setTempFirstName]=useState('');
  const [tempSecondName,setTempSecondName]=useState('');
  const [firstName,setFirstName]=useState('');
  const [secondName,setSecondName]=useState('');
  const [progress,setProgress]=useState(0);
  const [result,setResult]=useState('Lets Try!!');

  const onButtonClick=()=>{
    setFirstName(tempFirstName);
    setSecondName(tempSecondName);
    setTempFirstName('');
    setTempSecondName('');
  const url=`https://love-calculator.p.rapidapi.com/getPercentage?fname=${firstName}&sname=${secondName}`;
  fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "b66d0c5c06msh175c1acc0436331p1163bdjsn6f5ee5929221",
		"x-rapidapi-host": "love-calculator.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(data=>{
  console.log(data)
  setProgress(data.percentage);
  setResult(data.result);
})
.catch(err => {
	console.error(err);
});
}

  return (
    <div className="app">

      <div className="app__header">
        <div className="app__logo__box">
          <h1 className="app__header__h1">LOVE CALCULATOR</h1>
        </div>
          <h2 className="app__header__h2">IT's Just For Fun Don't Take It Seriously</h2>
      </div>


      <div className="input__box">
        <div className="input__and__button__container">
          <div className="input__box__container">
            <input value={tempFirstName} onChange={(e)=>setTempFirstName(e.target.value)} className="input__box__input" type="text" placeholder="Enter Your Name "/>
            <div className="heart__img"></div>
            <input value={tempSecondName} onChange={(e)=>setTempSecondName(e.target.value)} className="input__box__input" type="text" placeholder="Enter Partner Name"/>
          </div>
          <button className="submit__button" onClick={onButtonClick} >Submit</button>
        </div>
      </div>

      <div className="result__div">
        <h2>{result}</h2>
      </div>

      <div className="main__part">
        <div className="main__part__card">
          <h2>{firstName ? firstName : 'Your Name'}</h2>
        </div>
        <ProgressBar size="200" progress={progress} strokeWidth="20"/>
        <div className="main__part__card">
          <h2>{secondName ? secondName : 'Partner Name'}</h2>
        </div>
      </div>
      
    </div>
  );
}

export default App;
