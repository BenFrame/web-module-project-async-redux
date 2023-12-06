import React, {useState, useReducer} from 'react';
import './App.css';
import reducer, {initialState} from './reducers/hordeReducer'
import { addHorde, resetFaction } from './actions/actions';
import { connect } from 'react-redux';
import axios from 'axios';

function App( props ) {
  // const [state, dispatch] = useReducer(reducer, initialState)
  // console.log( 'props.data', props.data );

  const fetchFaction = async ( faction ) => {
    const options = {
      method: 'GET',
      url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/factions/${faction}`,
      headers: {
        'X-RapidAPI-Key': '740ee6a4d7mshdd547fa2a8ebc6bp151af8jsn3fcc147bf69c',
        'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      // console.log(response.data);
      const withImages = response.data.filter( item => item.img );
      // console.log(withImages)
      props.addHorde( withImages );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    
  <div className="App">
    <header className="App-header">
      <h1>Hearthstone card finder</h1>
        <h2>Find card by faction</h2>
          <div className= "Button-container">
            <button onClick={() => fetchFaction( 'horde' )}>Horde</button>
            <button onClick={() => fetchFaction( 'alliance' )}>Alliance</button>
            <button onClick={() => fetchFaction( 'neutral' )}>Neutral</button>
            <button onClick= {props.resetFaction}>Reset</button>
      </div>
      { props.data.map( item => (<img src={item.img} alt={`Card: ${item.name}`} key={item.cardId} />))}
      </header>
    </div>
  );
}

const mapStateToProps = ( state ) => ({ data: state.data });
const mapDispatchToProps = ( dispatch ) => ({
  addHorde: ( data ) => dispatch( addHorde( data ) ),
  resetFaction: () => dispatch(resetFaction())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);