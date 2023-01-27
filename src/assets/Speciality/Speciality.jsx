import React, { useState } from 'react'
import '../styles/speciality.css'
const Speciality = () => {
    const services =[
        {
            id: 1,
            title: 'Pediatircs',
            image: 'https://firebasestorage.googleapis.com/v0/b/fir-api-7421d.appspot.com/o/test%2Fcdc-Vqt9v7v6g44-unsplash%201.png?alt=media&token',
        },
        {
            id: 2,
            title: 'General Medecine',
            image: 'https://firebasestorage.googleapis.com/v0/b/fir-api-7421d.appspot.com/o/test%2Fnational-cancer-institute-DK--4VWK1tw-unsplash%201.png?alt=media&token=403fc024-50e7-4efb-ae04-ba6200b078e2',
        },
        {
            id:31,
            title: 'Orthopedics',
            image: 'https://firebasestorage.googleapis.com/v0/b/fir-api-7421d.appspot.com/o/test%2Ftom-claes-HIdUiamYIs0-unsplash%201.png?alt=media&token=12bdd665-e0b7-4f7e-bfaa-352610a41af3',
        },
        {
            id: 4,
            title: 'Eye Specialist',
            image: 'https://firebasestorage.googleapis.com/v0/b/fir-api-7421d.appspot.com/o/test%2Fnrd-aMmDIsdnUro-unsplash%201.png?alt=media&token=6d2c7445-2a4c-41a2-8597-ba8aa21511e4',
        },
        {
            id: 10,
            title: 'Ent surgery',
            image:'https://i.ytimg.com/vi/aWSGqVR02LE/hqdefault.jpg'
        },
        {
            id: 5,
            title: 'Dermatology',
            image: 'https://www.windsor.edu/wp-content/uploads/2021/06/want-to-be-a-dermatologist-1024x675.jpg',
        },
        {
            id: 6,
            title: 'Cardiothoracic Surgery',
            image: 'https://www.healthcareers.nhs.uk/sites/default/files/styles/hero_image/public/hero_images/medicine-male-surgery-with-surgical_instruments.jpg?itok=6K0HbZ1s',
        },
        {
            id: 7,
            title: 'Clinical genetics',
            image: 'https://www.news-medical.net/image.axd?picture=2021%2F12%2Fshutterstock_607718810_(1).jpg',
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
                <h1>Select your Speciality</h1>
                <p>Private online consultations with verified doctors in all specialists</p>
            </div>
        </div>
        <div className="speciality-items">

            {
                visibleImages.map(service => (
                    <div className='speciality-item'>
                        <div className='image'>
                            <img src={service.image} alt='flag' />
                        </div>
                        <div className='text'>
                            <h3>{service.title}</h3>
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