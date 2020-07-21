import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import './header.scss'
interface IProps {
    title: string
}

export const Header:React.FC<IProps> =  ({title}) => {
  return (
    <>
      <Navbar  id='header' bg="light">
        <Navbar.Brand id='header-brand' href="#home"><b>{title}</b></Navbar.Brand>
      </Navbar>    
    </>
    )
}