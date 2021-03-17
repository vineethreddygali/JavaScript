import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

function LoginForm(props) {
  const nameEl = React.useRef(null);
  const passwordEl = React.useRef(null);
  const rememberMeEl = React.useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      username: nameEl.current.value,
      password: passwordEl.current.value,
      rememberMe: rememberMeEl.current.checked,
    }
    // it would be a more completely correct REACT approach
    // to make a JSX component to render formData out to a selector on the HTML
    console.log(formData);
  };

  return (
     <form onSubmit={handleSubmit}>
       <input type="text" placeholder="username" ref={nameEl} />
       <input type="password" placeholder="password" ref={passwordEl} />
       <label>
         <input type="checkbox" ref={rememberMeEl} />
         Remember me
       </label>
       <button type="submit" className="myButton">Login</button>
     </form>
   );
}

ReactDOM.render(<div><LoginForm /></div>, document.getElementById("root1"));