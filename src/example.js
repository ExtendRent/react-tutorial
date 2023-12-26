import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';


//JSX => javascript ile htmlin birleştirilmesi => html+ js
export default function App() {
  //react hooks
  //useState(0) başlangıç değeri => let total =0 gibi düşün
  const [total,setTotal] =useState(0);
  const [deger, setdeger] = useState(0)
  // useEffect 
  
  useEffect( () => {
      if(total > 10){
        alert("Total 10 dan büyük olamaz");
        setTotal(10);
      }
        console.log(total)},
        [total]
        )
  useEffect( () =>{
    console.log("use effect");
  } )
  const increase =() => {
    setTotal(total+1);
  }
  const decrease =() => {
    setTotal(total-1);
  }
//two way Data Binding
const [activity, setActivity] = useState("");
const [activityList,setActivityList] = useState(["Aktivite 1","Aktivite 2","Aktivite 3"]);
const clearActivity= () => {
  setActivity("");
}
const addActivity = () => {
  setActivityList([...activityList, activity]);
  clearActivity();
}
const removeActivity = (activity) => {
  setActivityList(activityList.filter(i => i !== activity));
}


  return (
    <>
   <Navbar name="halit" />
    <div>
      <p>{total}</p>
    </div>
    <div>
        <button onClick={increase}>Arttır</button>
        <button onClick={ () => {decrease(); }}>Azalt</button> {/* anonim bir fonsiyon çağırmış gşbş olutorum */}
    </div>
    <hr/>
    <div>
      <input  value={activity} onChange={ (event) => { setActivity(event.target.value) }} type='text' placeholder='Aktivite Giriniz...'></input>
      <br />
      <button onClick={ () => { addActivity() }}>Ekle</button>
      <ul>
          {/* JSX içerisinde iterasyonlar her zaman MAP ile yapılmalıdır. */}
          {activityList.map((element) =>
            <li key={element}>{element} <button onClick={() => { removeActivity(element) }}>Sİl</button></li>)}
        </ul>
    </div>
     {/*  <ProductCard name="Laptop" price={5000}  classes="yellow-border" />
      <ProductCard name="Mouse" price={300} />
      <ProductCard name="Klavye (Blue Switch)" price={200} /> */}
    </>
  );
}