import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Contributors to the Project</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
    

            <CardItem
              src='images/one.jpg'
              text='Ananya Singh - 20BCE0785'
              label='Github'
              path='https://github.com'
              
              
            />
            
            <CardItem
              src='images/two.jpg'
              text='Eeshani Majumder - 20BCE0607'
              label='Github'
              path='/life'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/three.jpeg'
              text='Namit Kasliwal - 20BCE2366'
              label='Github'
              path='/life'
            />
            <CardItem
              src='images/four.jpg'
              text='Prof. Narayanamoorthi M., SCOPE'
              path='/life'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;