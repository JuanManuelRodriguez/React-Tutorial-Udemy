// import './utils';
import {square, add} from './utils';
import {isAdult, canDrink} from './person';
console.log('app.js is running');
console.log('square ', square(4));
console.log('add', add(2, 3));

console.log('isAdult ', isAdult(18));
console.log('canDrink', canDrink(18));


// class IndecisionApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
//     this.handlePick = this.handlePick.bind(this);
//     this.handleAddOption = this.handleAddOption.bind(this);
//     this.handleDeleteOption = this.handleDeleteOption.bind(this);
//     this.state = {
//       options: []
//     }
//   }
//   // lifecycle methods
//   componentDidMount() {
//     try {
//       const json = localStorage.getItem('options');
//       const options = JSON.parse(json);
//       if (options) {
//         this.setState(() => ({options}));
//       }
//     } catch (error) {
//       // Do nothing at all
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.options.length !== this.state.options.length) {
//       const json = JSON.stringify(this.state.options);
//       localStorage.setItem('options', json);
//     }
//   }


//   handleDeleteOptions() {
//     this.setState(() => ({ options: [] }));
//   }
//   handleDeleteOption (optionToRemove) {
//     this.setState((prevSatate) => ({
//       options: prevSatate.options.filter((option) => optionToRemove !== option)
//     }));
//   }
//   handlePick () {
//     const randomNum = Math.floor(Math.random() * this.state.options.length);
//     const option = this.state.options[randomNum];
//     alert(option);
//   }
//   handleAddOption (option) {
//     if(!option) {
//       return 'Enter valid value to add option';
//     } else if (this.state.options.indexOf(option) > -1) {
//       return 'This option already exists';
//     }

//     this.setState((prevSatate) => ({ options: prevSatate.options.concat(option) }));
//   }
//   render() {
//     const title = 'Indecision';
//     const subtitle = 'Put your life in the hands of a computer';
//     return (
//       <div>
//         <Header title={title} subtitle={subtitle}/>
//         <Action 
//         hasOptions={this.state.options.length > 0}
//         handlePick = {this.handlePick}
//          />
//         <Options 
//         options={this.state.options}
//         handleDeleteOptions={this.handleDeleteOptions}
//         handleDeleteOption={this.handleDeleteOption}
//         />
//         <AddOption handleAddOption={this.handleAddOption}/>
//       </div>
//     )
//   }
// }

// const Header = (props) => {
//   return (
//     <div> 
//       <h1>{props.title}</h1>
//       <h2>{props.subtitle}</h2>
//     </div>
//   );
// }

// const Action = (props) => {
//   return (
//     <div> 
//       <button 
//         onClick={props.handlePick}
//         disabled={!props.hasOptions}
//       >
//       What should I do?</button>
//     </div>
//   );
// }
// const Options = (props) => {
//   return (
//     <div>
//       <button onClick={props.handleDeleteOptions}>Remove All</button>
//       <ul>
//         {
//           props.options.map((option) =>(
//              <Option 
//               key={option}
//               optionText={option}
//               handleDeleteOption={props.handleDeleteOption}
//               />
//           ))
//         }
//       </ul>
//     </div>
//   );
// }

// const Option = (props) => {
//   return (
//     <li>
//       {props.optionText}
//       <button 
//         onClick={(e)=> {
//           props.handleDeleteOption(props.optionText);
//         }}
//       >
//         remove
//       </button>
//     </li>
//   );
// }

// class AddOption extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleAddOption = this.handleAddOption.bind(this);
//     this.state = {
//       error: undefined
//     }
//   }
//   handleAddOption(e){
//     e.preventDefault();
//     const option = e.target.elements.option.value.trim();
//     const error = this.props.handleAddOption(option);
//     this.setState(() => ({ error }));
//   }
//   render() {
//     return (
//       <div> 
//         {this.state.error && <p>{this.state.error}</p>}
//         <form onSubmit={this.handleAddOption}>
//           <input type="text" name="option"></input>
//           <button>Add option</button>
//         </form>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
