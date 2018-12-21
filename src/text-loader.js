import React, { Component } from 'react';
import data from './text/text.json';
import './text-loader.less';

export default class textLoader extends React.Component {
    render(){
      return (
        <ul>
        {
          data.qna.map((question, i)=>{
            return <div className="qna-class"><li><h2>{question.q}</h2></li><li>{question.a}</li></div>;
          })
        }
        </ul>
      );
    }
}
