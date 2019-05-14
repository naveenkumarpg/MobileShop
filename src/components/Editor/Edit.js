import React, { Component } from 'react'

export default class Edit extends Component {

  constructor(props){
    super(props);
    this.state = {
      mobile: {}
    };
  }

  componentDidMount(){
    let url = "http://localhost:3001/mobiles/" + this.props.match.params.id;

        const fetchPhonesData = new Promise(function(resolve,reject){
            fetch(url).then((data) => {
              return data.json();
            }).then((data) =>{
              resolve(data);
            });
          });

          fetchPhonesData.then((data) => {
            this.setState({
              mobile: data
            });
          });
  }

  render() {
    return (
      <div className="container">

      </div>
    )
  }
}
