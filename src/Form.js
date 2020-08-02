import React ,{Component }from 'react';
import axios from 'axios';
import classes from './style.module.css';

class Form extends Component {
    state = { companyName: '' };
    
    handleSubmit = async (event) => {
      event.preventDefault();
      const resp = await axios.get(`https://api.github.com/users/${this.state.companyName}`);
      this.props.onSubmit(resp.data);
      this.setState({ companyName: '' });
    };
   
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <span className={classes.formtext}>&#x3C;Form /&#x3E;</span>
            <input 
              type="text" 
              value={this.state.companyName}
              onChange={event => this.setState({ companyName: event.target.value })}
              placeholder="Enter Company Name" 
              required 
            />
            <br/> <br/>
            <button>Go!</button>
          </form>
        );
      }
  }






export default Form;