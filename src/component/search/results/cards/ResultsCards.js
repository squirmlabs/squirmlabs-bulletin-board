import React, { Component } from 'react';
import ResultCard from './ResultCard';
import classNames from 'classnames';

export default (props) => {
  console.log('PROPS', props)
  // const cards = props.results.map((tag, i) => {
  //   return <ResultCard tag={tag} key={i} />;
  // });
  return (
    <div className="cards">
      Cards go here
    </div>
  );
}


