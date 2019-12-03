import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle'
import Counter from './Counter'
import MovieList from './Movies/MovieList'
import MovieDetail from './Movies/MovieDetail'
import {Route,Link,Switch} from 'react-router-dom'
import Students from './Students'
import ButtonAppBar from './ANavbar'
function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={MovieList}/>
      <Route path='/:id' component={MovieDetail} />

       </Switch>
    
    </div>
  );
}

export default App;





// export const Poster = styled.img`
// width: 200px
// height: 250px
// box-shadow : 0 0 35px black
// `

// const MovieGrid = styled.div`
// display : grid;
// padding: 1rem;
// grid-template-columns: repeat(4,1fr);
// grid-row-gap : 1rem;
// `

// const MovieWrapper = styled.div`
//   position: relative;
//   padding-top: 50vh;
//   background: url(${props => props.src}) no-repeat;
//   background-size: cover;
// `;
// const MovieInfo = styled.div`
//   background: white;
//   text-align: left;
//   padding: 2rem 10%;
//   display: flex;
//   > div {
//     margin-left: 20px;
//   }
//   img {
//     position: relative;
//     top: -5rem;
//   }
// `;

