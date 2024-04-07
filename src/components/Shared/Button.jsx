import React from 'react'

const Button = ({textColor,bgColor,text,handler=()=>{}}) => {
  return (
    <button onClick={handler} className={`${textColor} ${bgColor} hover:scale-105 duration-300 py-1 px-4 rounded-md border border-black`}>{text}</button>
  )
}

export default Button