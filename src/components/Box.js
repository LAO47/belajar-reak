import React from 'react'


function Box(props) {
  return (
    <div className='s-box'>
        <div className='s-b-img'>
            <img src={props.image} alt={props.alte}/>
            </div>
            <div className='s-b-text'>
                <p> Lorem ipsum monyeet lagi monyeeet</p>
                <a href='#' className='cv-btn'>{props.button}</a>
        </div>
    </div>
  )
}

export default Box