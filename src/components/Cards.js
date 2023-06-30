import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these COOL ASS Destinations!</h1>
        <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src='./react-demo/images/img-9.jpg'
                text= "Explore the hidden 💦fall deep inside the Amazon Jungle!"
                label= 'Adventure'
                path = '/services'
                />

                <CardItem 
                src='./react-demo/images/img-2.jpg'
                text= "BEACH :D Cool Beach and cool island Mr. Beast"
                label= 'Successful 💯'
                path = '/services'
                />

                
            </ul>
            <ul className='cards__items'>
            <CardItem 
                src='./react-demo/images/img-3.jpg'
                text= "MR. BEAST ABANDONED ME 😢"
                label = 'Not Successful'
                path = '/services'
                />

                <CardItem 
                src='./react-demo/images/img-4.jpg'
                text= "I luv basketball 🏀 LEBRON JAMES !"
                label = 'Athletics'
                path = '/services'
                />
                <CardItem 
                src='./react-demo/images/img-5.jpg'
                text= "MR. BEAST ABANDONED ME 😢 pt 2"
                label = 'Not Successful'
                path = '/services'
                />
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Cards