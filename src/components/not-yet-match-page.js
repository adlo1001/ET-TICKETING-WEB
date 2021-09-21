import React, { Component } from "react";
import ActivityIndicator from 'react-activity-indicator';

export default class YetMatchPage extends Component {
  render() {
    return (<div style={{textAlign: 'center'}}>
            <ActivityIndicator number={5} duration={200} activeColor="#0070bf" borderWidth={2} borderRadius="20%" diameter={15} />
        </div>)
  }
}



