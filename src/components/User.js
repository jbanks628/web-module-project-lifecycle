import React from 'react';
import axios from 'axios';

class User extends React.Component{
    componentDidMount(){
        axios.get('https://api.github.com/users/jbanks628')
        .then(res=>{
          this.setState({
            ...this.state,
            userInfo: res.data
          })
        })
        .catch(err=>console.error(err))
      } 
         render(){
        return(
        <div>
            <User />
        </div>
        )
    }
}
export default User;