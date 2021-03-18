import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

function DetailsPage(props) {
  const firstName = React.useRef(null);
  const lastName = React.useRef(null);
  const emailId = React.useRef(null);
  const phone = React.useRef(null);
  const age = React.useRef(null);

  

  const handleSubmit = a => {
    a.preventDefault();
    const details = {
      firstname: firstName.current.value,
      lastname: lastName.current.value,
      Email: emailId.current.value,
      Phone: phone.current.value,
      Age: age.current.value,

    }
    // it would be a more completely correct REACT approach
    // to make a JSX component to render formData out to a selector on the HTML
    console.log(details);
  };

  return (
     <form onSubmit={handleSubmit}>
       Firstname: <input type="text" ref={firstName}/>
       <br></br>
       Lastname: <input type="text" ref={lastName}/>
       <br></br>
       Email: <input type="text" ref={emailId}/>
       <br></br>
       Phone: <input type="number" ref={phone}/>
       <br></br>
       Age: <input type="number" ref={age}/>
       <br></br>
      
       <button type="submit" className="button">Submit</button>
       <button type="reset">Reset</button>
     </form>
   );
}

ReactDOM.render(<div><DetailsPage /></div>, document.getElementById("root1"));