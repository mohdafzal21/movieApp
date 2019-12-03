

import React, { Component } from 'react'
import Apidata from '../Api'
import Movie from './Movie'
import {connect} from 'react-redux'
import {getMovies} from './movieAction'
import Grid from '@material-ui/core/Grid';
import MediaCard from './MovieCard'
class MovieList extends Component {
    // state = {
    //     movies : []
    // }
  async  componentDidMount(){
        // const data = await Apidata
        // // console.log("did moiunt" ,data)
        // this.setState({
        //     movies : data
        // })
        if(!this.props.isLoaded ){
            this.props.getMovies()

        }
    }
    render() {
        console.log(this.props)
        return (
            <Grid container>
               
                {this.props.movies.map((movies) =>
                <>
                 <Grid item xs={4}>
                <MediaCard key={movies._id} {...movies}/>
                </Grid>
                </>
                )}
            </Grid>
        )
    }
}
const mapStateToProps = state=> ({
    movies : state.moviesReducer.movies,
    isLoaded :state.moviesReducer.isLoaded
})


export default  connect(mapStateToProps, {getMovies})(MovieList)