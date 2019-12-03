import React from 'react';
import styled from 'styled-components'
import  {Link} from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    bigAvatar: {
      width: 200,
      height: 200,
    },
  }));
  


const Movie = (props)=>{
    // console.log("In Movie", props)
    const classes = useStyles()
    return (
        <>
        <Link to={`${props._id}`}>
        <Poster src={props.images.poster}  /> 
        </Link>
        </>
    )
}

export default Movie

export const Poster = styled.img`
     width : 250px
     height : 200px
     box-shadow : 0 0 35px black
`