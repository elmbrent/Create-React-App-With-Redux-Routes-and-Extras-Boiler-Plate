import React from 'react';
import '../../assets/styles/app.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default App;
