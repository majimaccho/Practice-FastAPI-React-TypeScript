import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

interface IProps {
    title: string
}

export const Header:React.FC<IProps> =  ({title}) => {
  return (
    <AppBar position='static' >
      <Toolbar >
        <Typography variant='h6'>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
    )
}