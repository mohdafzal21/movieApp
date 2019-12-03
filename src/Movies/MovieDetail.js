import React, { Component } from 'react'
import singleApiData from './singleApi'
import {Poster} from './Movie'
import styled from 'styled-components'
import {getMovie,resetMovie} from './movieAction'
import {connect } from 'react-redux'
//fetch and find , 
// render the ui
class MovieDetail extends Component {
    // constructor(props){
    //     super(props)
    //         this.state ={
    //             movie : {}
    //         }
    //     console.log("first");
    // }
  
   async componentDidMount(){
    console.log("third");
    this.props.getMovie(this.props.match.params.id)
        // const resp = await singleApiData.find((movies)=> movies._id === this.props.match.params.id)
        // console.log("movie detail",resp);
        // this.setState({
        //     movie : resp
        // })
    }
    componentWillUnmount(){
      this.props.resetMovie()
    }
    render() {
        console.log("second");
        console.log("Inside MovieDetail PRops", this.props)
        console.log(this.props.movie);
        const {movie} = this.props
        if(!movie._id) return null
        return (
               <MovieWrapper src={movie.images.fanart}>
                  <MovieInfo>
                    <Poster  src={movie.images.poster}/>
                  <div>
                    <h2>{movie.title}</h2>
                    <h3>{movie.year}</h3>
                   <p>{movie.synopsis}</p>
                  </div>
                  </MovieInfo>
         </MovieWrapper>         
        )
    }
}

const mapStateToProps = state =>({
  movie: state.moviesReducer.movie
})

export default  connect(mapStateToProps,{getMovie,resetMovie})(MovieDetail)

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.src}) no-repeat;
  background-size: cover;
`;
const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;