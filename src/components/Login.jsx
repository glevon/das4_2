import React, { Component } from 'react'
import Axios from "axios"

 class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userInput:{
                name:"",
                email:"",
                password:""
            },
            error:""
            
             
        }
    }
    change(e){
        let k=e.target.getAttribute("data-id")
        this.state.userInput[k]=e.target.value
        this.setState({})
    }
    login(){
        this.state.error=""
        for(let i in this.state.userInput){
            if(this.state.userInput[i]===""){
                this.state.error="Please fill in all fields"
            }
        }
        this.setState({})

        if (this.state.error==="") {
            Axios.post("http://localhost:4000/login",{user:this.state.userInput})
            .then(r=>{
                if (r.data[0]===undefined) {
                    this.state.error="Incorrect input data"
                    this.setState({})
                }
                else{
                    this.props.history.replace("/Profile", "Name = "+r.data[0].name +" Email = " +r.data[0].email+" Password = "+ r.data[0].password)
                    //  console.log(r.data[0].name);

                }
                 
            })
        }
        
    }
    render() {
        return (
            <div>
                <h1>{this.props.location.state}</h1>
                <div className="w-50 mx-auto alert-warning p-4">
                    <h1 className="text-center">Login here!</h1>
                    <div style={{display:this.state.error===""?"none":"block"}} className="alert alert-danger">{this.state.error}</div>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input onChange ={this.change.bind(this)} value={this.state.userInput.name} data-id="name" type="text" id="name" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input onChange ={this.change.bind(this)} value={this.state.userInput.email} data-id="email" type="email" id="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input onChange ={this.change.bind(this)} value={this.state.userInput.password} data-id="password" type="password" id="password" className="form-control" />
                    </div>
                    <button onClick={this.login.bind(this)} className="btn btn-warning" >Login</button>
                </div>
            </div>
        )
    }
}

export default Login
