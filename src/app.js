class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
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
// class IndecisionApp extends React.Component {
//   render() {
//     const title = 'Indecision';
//     const subtitle = 'Put your life in the hands of a computer';
//     const options = ['option one', 'option two', 'option four'];
//     return (
//       <div>
//         <Header title={title} subtitle={subtitle}/>
//         <Action />
//         <AddOption />
//         <Options options={options}/>
//       </div>
//     )
//   }
// }
// class Header extends React.Component {
//   render() {
//     return (
//       <div> 
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }
// class Action extends React.Component {
//   handlepick(){
//     alert('handle pick');
//   }
//   render() {
//     return (
//       <div> 
//         <button onClick={this.handlepick}>What should I do?</button>
//       </div>
//     );
//   }
// }
// class Options extends React.Component {
//   constructor(props){
//     super(props);
//     this.handleRemoveAll = this.handleRemoveAll.bind(this);
//   }
//   handleRemoveAll(){
//     alert('handle remove all');
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleRemoveAll}>Remove All</button>
//         <ul>
//           {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
//         </ul>
//       </div>
//     );
//   }
// }
// class Option extends React.Component {
//   render() {
//     return (
//       <li>
//         {this.props.optionText}
//       </li>
//     );
//   }
// }
// class AddOption extends React.Component {
//   handleAddOption(e){
//     e.preventDefault();
//     const option = e.target.elements.option.value.trim();
//     if (option) {
//       alert(option);
//     }
//   }
//   render() {
//     return (
//       <div> 
//         <form onSubmit={this.handleAddOption}>
//           <input type="text" name="option"></input>
//           <button>Add option</button>
//         </form>
//       </div>
//     );
//   }
// }

ReactDOM.render(<Counter />, document.getElementById('app'));
