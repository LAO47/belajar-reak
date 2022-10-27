import React from 'react'
import featureimage from '../images/Frame 19.png'

function Features() {
  return (
    <div id='features'>
        <div className='features-model'>
            <img src={featureimage} alt='feature-image'/>
        </div>
        <div className='features-text'>
            <h2>Features</h2>
            <h3>This Application <span>Software</span> is Art</h3>
            <p>Lorem ipsum monyeet</p>
            <button>Lihat lebih lanjut</button>
        </div>
    </div>
    
  )
}

export default Features