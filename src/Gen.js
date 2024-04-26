import React, {useState} from 'react'

const Gen = (props) => {
  
  const [tee, setTee] = useState(0);
  const [bot, setBot] = useState(0);
  const [sho, setSho] = useState(0);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const numbers = props.images
const numbers2 = props.bottoms
const numbers3 = props.shoes

function getTee(){
  let teeVal = numbers[getRandomInt(numbers.length)]
  let botVal = numbers2[getRandomInt(numbers2.length)]
  let shoVal = numbers3[getRandomInt(numbers3.length)]

  setTee(teeVal)
  setBot(botVal)
  setSho(shoVal)
}

  return (
    <div>
      <div>
        <div className='p-4 flex justify-center rounded-md h-64'><img className='w-64' src= {tee}/></div>
        <div className='p-4 flex justify-center rounded-md'><img className='w-44' src= {bot}/></div>
        <div className='p-4 flex justify-center rounded-md'><img className='w-44' src= {sho}/></div>

        <button onClick={getTee}  className='mt-5 w-full p-4 bg-[#000] text-white font-medium rounded-md'>Generate</button>


      </div>
    </div>
  )
}

export default Gen