import React, { useState } from 'react'
import '../styles/speciality.css'
const Speciality = () => {
    const services =[
        {
            id: 1,
            title: 'Find a doctor',
            image: 'https://firebasestorage.googleapis.com/v0/b/fir-api-7421d.appspot.com/o/test%2Fcdc-Vqt9v7v6g44-unsplash%201.png?alt=media&token',
        },
        {
            id: 2,
            title: 'Find a doctor',
            image: 'https://firebasestorage.googleapis.com/v0/b/fir-api-7421d.appspot.com/o/test%2Fcdc-Vqt9v7v6g44-unsplash%201.png?alt=media&token',
        },
        {
            id:31,
            title: 'Find a doctor',
            image: 'https://firebasestorage.googleapis.com/v0/b/fir-api-7421d.appspot.com/o/test%2Fcdc-Vqt9v7v6g44-unsplash%201.png?alt=media&token',
        },
        {
            id: 4,
            title: 'Find a doctor',
            image: 'https://firebasestorage.googleapis.com/v0/b/fir-api-7421d.appspot.com/o/test%2Fcdc-Vqt9v7v6g44-unsplash%201.png?alt=media&token',
        },
        {
            id: 10,
            title: 'Find a doctor',
            image: 'https://firebasestorage.googleapis.com/v0/b/fir-api-7421d.appspot.com/o/test%2Fcdc-Vqt9v7v6g44-unsplash%201.png?alt=media&token',
        },
        {
            id: 5,
            title: 'Find a doctor',
            image: 'https://firebasestorage.googleapis.com/v0/b/fir-api-7421d.appspot.com/o/test%2Fcdc-Vqt9v7v6g44-unsplash%201.png?alt=media&token',
        },
        {
            id: 6,
            title: 'Find a doctor',
            image: 'https://firebasestorage.googleapis.com/v0/b/fir-api-7421d.appspot.com/o/test%2Fcdc-Vqt9v7v6g44-unsplash%201.png?alt=media&token',
        },
        {
            id: 7,
            title: 'Find a doctor',
            image: 'https://firebasestorage.googleapis.com/v0/b/fir-api-7421d.appspot.com/o/test%2Fcdc-Vqt9v7v6g44-unsplash%201.png?alt=media&token',
        },
        
    ]

    const [visibleImages, setVisibleImages] = useState(services.slice(0, 4));
    const [showMore, setShowMore] = useState(true);

    const handleShowMore = () => {
      if (showMore) {
        setVisibleImages(services);
        setShowMore(false);
      } else {
        setVisibleImages(services.slice(0, 4));
        setShowMore(true);
      }
    };
    
  return (
    <div className='speciality-wrapper'>
        <div className='title'>
            <div>
                <h1>Selecy your Speciality</h1>
                <p>Private online consultations with verified doctors in all specialists</p>
            </div>
        </div>
        <div className="speciality-items">

            {
                visibleImages.map(service => (
                    <div className='speciality-item'>
                        <div className='image'>
                            <img src='https://firebasestorage.googleapis.com/v0/b/fir-api-7421d.appspot.com/o/test%2Fcdc-Vqt9v7v6g44-unsplash%201.png?alt=media&token=8f68c2d4-7c9a-44dd-bdf7-d0c59d8e10d0.png' alt='flag' />
                        </div>
                        <div className='text'>
                            <h3>Find a doctor</h3>
                        </div>
                </div>
                ))
            }

          
        </div>
        <div style={{display:'flex',justifyContent:"center", alignItems:'center'}}>

            <button  onClick={handleShowMore} >
                {showMore ? 'Show More' : 'Show Less'}
                </button>
        </div>
      
    </div>
  )
}

export default Speciality