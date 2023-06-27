import React from 'react';
import { CardMedia } from '@mui/material';


const Test = (props) => {
  return (
    <div>
    <CardMedia
    component="img"
    height="194"
    image={props.image}
  />

  {console.log(props.image)}

  </div>
  )
}

export default Test