import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [titl,settil]=useState("")
  const [data,setdata]=useState([])
 useEffect(()=>{
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${titl}`).then((res)=>{ return  res.json()}).then((res)=>{
      console.log(res.items)
      // console.log(res.items[0].volumeInfo.imageLinks.thumbnail)
      // for(let i=0;i<res.items.length;i++){
      //   console.log(res.items[i].volumeInfo.authors)
        
      // }
     
        setdata(res.items)
      
      
    }).catch((err)=>{  console.log(err)})
 },[titl])

  
  return (
   
    <div className="App">
     <div id="header">  <h1>Book search</h1></div>
     <div id="body">
      <div id="search">  <input type="text" placeholder="search for book" onChange={(e)=>{
        settil(e.target.value)
      }} ></input></div>
      <div id="bookcontainer">
       {data&& data.map((data,index)=>{
        return <div id="op" key={index+"s"} style={{
          backgroundImage: `url(${data.volumeInfo.imageLinks.thumbnail})`,
         backgroundRepeat: "no-repeat"
        }}>
          <a href={data.volumeInfo.previewLink}>
          {data.volumeInfo.title&& <p> title: {data.volumeInfo.title}</p>}
         {data.volumeInfo.authors[0]&&  <p>authers : {data.volumeInfo.authors[0]}</p>}
         {data.volumeInfo.pageCount&& <p> page count :{data.volumeInfo.pageCount}</p>} 
          {data.volumeInfo.ratingsCount && <p> ratingcount : {data.volumeInfo.ratingsCount}</p>}
          </a>
         
        </div> 
       })}
      </div>
     </div>
    </div>
  );
}

export default App;
