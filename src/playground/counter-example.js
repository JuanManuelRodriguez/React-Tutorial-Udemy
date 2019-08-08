class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: props.count
    }
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    });
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}
Counter.defaultProps = {
  count: 0
}

ReactDOM.render(<Counter count={-10}/>, document.getElementById('app'));

// console.log('App.js is running!');

// //JSX - Javascript XML
// const app = {
//   title: 'Indecision App',
//   subtitle:'This is some info rev',
//   options: ['One', 'Two']
// }
// const template = ( 
//   <div>
//     <h1>{app.title} </h1>
//     {app.subtitle && <p>{app.subtitle}</p>}
//     <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//     <ol>
//       <li>Item one</li>
//       <li>Item Two</li>
//     </ol>
//   </div>
// );

// const user = {
//   name : 'Jonas',
//   age : 21,
//   location : 'Tandil'
// };

// function getlocation(location) {
//   if(location){
//     return <p>Location: {location}</p>
//   }
// }

// const template2 = ( 
//   <div>
//     <h1>{user.name? user.name : 'Anonymous'} </h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getlocation(user.location)}
//   </div>
// );

// let count = 0;
// const addOne = () => {
//   count++;
//   console.log(count);
//   renderCounterApp();
// }
// const subtractOne = () => {
//   count--;
//   console.log(count);
//   renderCounterApp();
// }
// const reset = () => {
//   count = 0;
//   console.log(count);
//   renderCounterApp();
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const templatethree = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={subtractOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
  
//   ReactDOM.render(templatethree, appRoot);
// }
// renderCounterApp();