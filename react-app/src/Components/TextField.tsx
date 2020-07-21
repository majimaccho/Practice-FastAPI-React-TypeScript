import React, { useRef } from 'react'

interface Props {
  text: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextField: React.FC<Props> = ({
  handleChange
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const divRef =  useRef<HTMLInputElement | null>(null)
  return(
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange}/>
    </div>
  )
}