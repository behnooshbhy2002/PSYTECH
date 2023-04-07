import React from 'react'
import './SearchBox.css'
import therapy from '../images/therapy.png'
const SearchBox = () => {
  return (
    <div className='contain'>
        <img src={therapy} className='pic'/>
        <div className='searchbox' dir='rtl'>
            <h1 className='p'>به دنبال چه میگردید؟</h1>
            <h3 className='p'>می توانید نام پزشک یا تخصص موردنظرتان را جستجو کنید...</h3>
            <div>
          { /*<img src={search} id='zoom' alt="zoom"></img>
          <i class="fa-solid fa-magnifying-glass"></i>*/}
            <input className='text' placeholder='جستجو کنید....' dir='rtl'></input>
            
            </div>
        </div>
    </div>
  )
}

export default SearchBox