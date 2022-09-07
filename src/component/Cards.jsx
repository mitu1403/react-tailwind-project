import React from 'react'

const Cards = (props) => {
  return (
    <div className={`w-full text-center shadow-xl rounded-lg hover:scale-105 duration-500 flex flex-col p-4 my-8 ${props.active} card-hover`} >
        <img src={props.img} alt="" className='w-20 mx-auto mt-[-3rem]' />
        <h2 className='py-8 text-2xl'>{props.title}</h2>
        <p className='text-4xl font-bold'>{props.price}</p>
        <div className='font-medium'>
            <p className='mt-4 border-b py-2'>{props.storage}</p>
            <p className='border-b py-2'>{props.user}</p>
            <p className='border-b py-2'>{props.upTo}</p>
        </div>
        <button className='card__button text-white'>Start Trial</button>
    </div>
  )
}

export default Cards