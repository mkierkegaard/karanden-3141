import React from 'react';
import './navbar.less';


export default class MyNavbar extends React.Component {

    constructor(props) {
        super(props);

        this.changeState = this.onClick.bind(this);
    }

    onClick( e ){
        const value = e.target.attributes[0].value;
        this.props.changeState(value);
    }

    render(){
      return (
            <div className="nav-links">
                <div onClick={this.changeState} value="news" className="nav-link-style">Nyheter</div>
                <div onClick={this.changeState} value="members" className="nav-link-style">För medlemmar</div>
                <div onClick={this.changeState} value="about" className="nav-link-style">Om föreningen</div>
                <div onClick={this.changeState} value="board" className="nav-link-style">Styrelsen</div>
                <div onClick={this.changeState} value="brooker" className="nav-link-style">Mäklare</div>
            </div>
      );
    }
}