import React, { Component } from 'react';
import Navbar from './EnnoAppBar';
import FoodCard from "./FoodCard";


class App extends Component {
  constructor(){
    super();
    this.state = {
      foods : [
        {
          title : 'Fried Rice With Onion',
          date : '6 Mei 2019',
          desc : 'Ini makanan'        
        },
        {
          title : 'Nasi Pecel',
          date : '10 April 1994',
          desc : 'Ini Pecel'
        },
        {
          title : 'Bakpao',
          date : '3 September 2018',
          desc : 'Ini Bakpao'
        }
      ]
    }
  }
  render(){
    return (
      <div>
        <Navbar/>
        <br/>
        {this.state.foods.map((data) => {
          return(
            <div>
            <FoodCard title={data.title} date={data.date} desc={data.desc}/>
            <br/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App;
