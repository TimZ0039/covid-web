import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', testPositiveRate:''};
  }
  mySubmitHandler = (event) => {
    event.preventDefault();

    const url =
    'https://tim-zhang-covidtracker.herokuapp.com/covid-positive?states='+ this.state.username

   fetch(url)
     .then((result) => result.json())
     .then((result) => {
       this.setState({
         testPositiveRate: result.testPositiveRate,
       })
     })
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Welcome to Covid Tracker {this.state.username}</h1>
      <p>Enter the state you want to look at:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      <input
        type='submit'
      />
      <p>{this.state.testPositiveRate}</p>

      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
