import React, { Component } from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import axios from 'axios';



class TableData extends Component {

  imageFormatter(cell, row){
    return (<img style={{width:50}} src={cell}/>)
  }

  getRecentCampers =  () => {
    axios.get(`https://fcctop100.herokuapp.com/api/fccusers/top/recent`)
    .then(resp => {
      const campers = resp.data;
      console.log(campers);
      this.setState({ campers});
    });
  }

  getAllTimeCampers = () => {
    axios.get(`https://fcctop100.herokuapp.com/api/fccusers/top/alltime`)
    .then(resp => {
      const campers = resp.data;
      console.log(campers);
      this.setState({ campers});
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      campers: [],
      columns: [{
        dataField: 'img',
        text: 'Avatar', 
        formatter: this.imageFormatter
      },
        {
        dataField: 'username',
        text: 'User Name'
      }, {
        dataField: 'recent',
        text: 'Last 30', 
        sort: true,
        headerEvents: {
          onClick: () => this.getRecentCampers()
        }
      }, {
        dataField: 'alltime',
        text: 'All Time',
        sort: true,
        headerEvents: {
          onClick: () => this.getAllTimeCampers()
        }
      }]

    };
    
   
  }

  componentDidMount() {
    axios.get(`https://fcctop100.herokuapp.com/api/fccusers/top/recent`)
    .then(resp => {
      const campers = resp.data;
      console.log(campers);
      this.setState({ campers});
    });
  }
  
  render() {

    return (
      <div className="row top-div">
       <h2>Camper Leaderboard</h2>

        <BootstrapTable 
          keyField='username' 
          data={this.state.campers} 
          columns={this.state.columns} 
          bordered={ false }
          striped
          hover
          condensed
          />

        

      </div>
    );
  }
}

export default TableData;



