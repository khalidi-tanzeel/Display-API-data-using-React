import React , {Component} from 'react';
import classes from './style.module.css';
import Company from './Company';


class companyList extends Component {
    render(){
        const p = this.props;
        return(
            <div className= {classes.companylist}>
            <span className={classes.companylisttext}>&#x3C;CompanyList /&#x3E;</span>
            {p.companyinfoarray.map(companyinfo => <Company key={companyinfo.id} {...companyinfo}/>)}

            </div>
        );
    }

}


export default companyList