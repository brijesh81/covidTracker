import './App.css';
import React, {Component} from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';

class App extends React.Component {

  state = {
    data: {}
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data : fetchedData
    });
  }
  render() {
  const {data} = this.state;
  return (
    <div className="App">
      <Cards data={this.state.data}/>
      <Chart />
      <CountryPicker />
    </div>
  );
  }
}

export default App;
