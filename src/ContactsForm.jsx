import React, { Component } from 'react';

class ContactsForm extends Component {

    constructor(props){
        super(props)

        this.state= {
            name: "",
            pnum: "",
            loc: ""
        }
    }

    handleChange = (e) => {
            e.preventDefault();
            this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd(this.state);
        this.setState({
            name: "",
            pnum: "",
            loc: ""
        });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: 
                </label><input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                <label>
                    Phone Number: 
                </label><input type="phone" name="pnum" value={this.state.pnum} onChange={this.handleChange}/>
                <label>
                    Location: 
                </label><input type="text" name="loc" value={this.state.loc} onChange={this.handleChange}/>
                <input type="submit"  value="Submit Me"/>
            </form>
        )
    }
}

export default ContactsForm;
