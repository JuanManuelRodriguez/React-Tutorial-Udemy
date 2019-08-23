/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person__ = __webpack_require__(2);
// import './utils';


console.log('app.js is running');
console.log('square ', __WEBPACK_IMPORTED_MODULE_0__utils__["c" /* square */](4));
console.log('add', __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* add */](2, 3));
console.log('substract', __WEBPACK_IMPORTED_MODULE_0__utils__["b" /* default */](100, 1));
console.log('isAdult ', __WEBPACK_IMPORTED_MODULE_1__person__["b" /* isAdult */](18));
console.log('canDrink', __WEBPACK_IMPORTED_MODULE_1__person__["a" /* canDrink */](18));


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


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
console.log('utils.js is running');

const square = (x)=> x * x;
/* harmony export (immutable) */ __webpack_exports__["c"] = square;
 // inline export
const add = (a, b)=> a + b;
/* harmony export (immutable) */ __webpack_exports__["a"] = add;

const subtract = (a, b)=> a - b;
/* harmony default export */ __webpack_exports__["b"] = (subtract);
// esport default (a, b)=> a - b;
// export {square, add, substract as default}; // named export


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isAdult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return canDrink; });
const isAdult = (age)=> age >= 18;
const canDrink = (age)=> age >= 21;



/***/ })
/******/ ]);