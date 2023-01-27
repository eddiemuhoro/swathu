import React from 'react'
import '../styles/app.css'
const OurApp = ({theme}) => {
  return (
    <div className={theme === 'white'? 'app-btn':'app-btn dark'} >
        <section style={{opacity:"0"}} className='image'>
            <img src="https://firebasestorage.googleapis.com/v0/b/fir-api-7421d.appspot.com/o/test%2FFrame.png?alt=media&token=5724216e-36be-4d93-9317-0916ce275b63" alt="image" />
        </section>
        <section  className='why-text'>
            <h2>Download our App</h2>
            <p>
                 Access video consultation with India’s top doctors on the Swasthu mobile Application. Connect with doctors online from the comfort of your home.
            </p>
            <div className='buttons'>
                <img src="https://firebasestorage.googleapis.com/v0/b/fir-api-7421d.appspot.com/o/test%2Fimage%201.png?alt=media&token=d3b31707-b598-4fcc-9442-90a8da97966a" alt="" />
                <img src="https://firebasestorage.googleapis.com/v0/b/fir-api-7421d.appspot.com/o/test%2Fimage%202.png?alt=media&token=4811ef04-af1d-40fd-9672-2a4feeff4a98" alt="" />
            </div>
        </section>
    </div>
  )
}

export default OurApp