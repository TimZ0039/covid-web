import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputString: '', testPositiveRate:'', positive:'', negative:'', state:'', schoolName:''};
  }
  mySubmitHandler = (event) => {
    event.preventDefault();

    const url =
    'https://tim-zhang-covidtracker.herokuapp.com/school-covid?schoolName='+ this.state.inputString

   fetch(url)
     .then((result) => result.json())
     .then((result) => {
       this.setState({
         testPositiveRate: result.testPositiveRate,
         positive: result.positive,
         negative: result.negative,
         state: result.state,
         schoolName: result.schoolName,
       })
     })
  }
  myChangeHandler = (event) => {
    this.setState({inputString: event.target.value});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Welcome to Covid Tracker </h1>
      <p>Enter the school you want to look at:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      <input
        type='submit'
      />
      <p>school name:{this.state.schoolName}</p>
      <p>location:{this.state.state}</p>
      <p>state's positive number:{this.state.positive}</p>
      <p>state's negative number:{this.state.negative}</p>
      <p>state's positive rate:{this.state.testPositiveRate}</p>
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
