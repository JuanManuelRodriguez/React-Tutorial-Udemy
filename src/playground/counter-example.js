console.log('App.js is running!');

//JSX - Javascript XML
const app = {
  title: 'Indecision App',
  subtitle:'This is some info rev',
  options: ['One', 'Two']
}
const template = ( 
  <div>
    <h1>{app.title} </h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item Two</li>
    </ol>
  </div>
);

const user = {
  name : 'Jonas',
  age : 21,
  location : 'Tandil'
};

function getlocation(location) {
  if(location){
    return <p>Location: {location}</p>
  }
}

const template2 = ( 
  <div>
    <h1>{user.name? user.name : 'Anonymous'} </h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getlocation(user.location)}
  </div>
);

let count = 0;
const addOne = () => {
  count++;
  console.log(count);
  renderCounterApp();
}
const subtractOne = () => {
  count--;
  console.log(count);
  renderCounterApp();
}
const reset = () => {
  count = 0;
  console.log(count);
  renderCounterApp();
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templatethree = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={subtractOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  
  ReactDOM.render(templatethree, appRoot);
}
renderCounterApp();