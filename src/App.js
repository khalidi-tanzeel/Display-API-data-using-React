import React , {Component} from 'react';
import Form from './Form';
import './App.css';
import CompanyList from './CompanyList';

class App extends Component {
  state = {
    companyinfoarray: [],
  };
 
  addCompany = (companyinfo) => {
  	this.setState(prevState => ({
    	companyinfoarray: [...prevState.companyinfoarray, companyinfo],
    }));
  };
 
	render() {
  	return (
    	<div>
        <Form onSubmit={this.addCompany} />
        <CompanyList companyinfoarray={this.state.companyinfoarray}/>
    	</div>
    );
  }	
}

export default App;
