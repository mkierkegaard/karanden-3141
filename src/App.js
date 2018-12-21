import React, { Component } from 'react';
import logo from './img/and.jpg';
import './App.less';

import Navbar from './navbar.js';
import Text from './text-loader.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {section: 'news'};

     this.changeState = this.changeState.bind(this);
  }

  changeState( state ) {
    this.setState({section: state});
  }

  render() {
    return (
      <div className="App">
        <header >
        </header>
        <div className="top-nav">
          <div className="nav-bar">
          <div className="logo-wrapper">
          <img src={logo} />
          </div>
          <div className="main-nav">
            <Navbar state={this.section} changeState={this.changeState}></Navbar>
          </div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content">
            <div style={{ display: this.state.section === 'news' ? 'block' : 'none'}}>
              <div className="col">
                Blog
              </div>
            </div>
            <div style={{ display: this.state.section === 'members' ? 'block' : 'none'}}>
              <div className="col">
                För medlemmar
              </div>
            </div>
            <div style={{ display: this.state.section === 'about' ? 'block' : 'none'}}>
              <div className="col">
                Om föreningen
              </div>
            </div>
            <div style={{ display: this.state.section === 'board' ? 'block' : 'none'}}>
              <div className="col">
                Styrelsen
              </div>
            </div>
            <div style={{ display: this.state.section === 'brooker' ? 'block' : 'none'}}>
              <div className="col">
                <Text></Text>
              </div>
            </div>
          </div>
      </div>
          <div className="footer">
            Brf Käranden 31-41 <br></br>
            brfkaranden@gmail.com

            </div>
        </div>
    );
  }
}

export default App;
