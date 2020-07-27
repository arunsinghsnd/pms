import React, { Component } from 'react'

const BASE_URL = "http://172.104.59.184/user/user_list";

class Profile extends Component {
state ={
    responseData: []
}

 componentDidMount(){
    fetch(BASE_URL)
    .then(res => res.json())
    .then(responseData => {

    console.log(responseData);
    })

 }
    render() {
        
        return (
        <div>
           <h1>User Dtails</h1>
           
            <h1>{this.props.email}</h1>


    
          </div>
        )
    }
}

export default Profile;












