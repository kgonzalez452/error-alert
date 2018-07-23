// import React from "react";
// import ReactDOM from "react-dom";
// import ionicons from "";
// import CloseIcon from "";
// import "./errorAlert.css";


// function ErrorBox () {
//   return(
//     <div className="error-container">
//       Box
//     </div >
//   )
// }

// function ErrorIcon () {
//   return (
//     <div>
//       <img className="errorIcon" src="" alt="error icon x" />
//     </div>
//   )
// }

// function CloseIcon () {
//   return(
//     <button>
//       <img i className="close" src="" alt="close button"></img>
//     </button>
//   )
// }


// function ErrorMessage () {
//   return(
//     <div className="error">
//       Error: 
//         <div className="errorType">
//           Internal Server Error
//         </div>
//     </div>
//   )
//     }

//     {/* ========================================= */}
//     {/* ========================================= */}
//     {/* ========================================= */}
//     {/* ========================================= */}
    
import React, {Component} from 'react';
      import ReactDOM from 'react-dom';
      import './index.css';
      
class ErrorAlert extends Component {

        render() {
      return (
      <div className='error-container'>
        <div className="error-alert">
          <div className='error-icon'>
            <h2 className="uno-skip">0</h2>
          </div>        
          <p className="error-title"> Error: </p>
          <p className="error-message"> Internal server error </p>
          <div className='error-close'>
            <ion-icon className="close">X</ion-icon>
          </div>
        </div>
      </div>

      )
  }
}


ReactDOM.render(<ErrorAlert />, document.getElementById('root'));