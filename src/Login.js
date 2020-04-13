import React from 'react'
import './App.css'

var initialState={
    name:"",
    clgname:"",
    stream:"",
    clgyear:"",
    email:"",
    pass:"",
    cpass:"",
    nameError:"",
    passError:"",
    emailError:""
}

class Login extends React.Component
{
    
    constructor(props)
    {
        super(props)
        this.state=initialState;
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    validate()
    {
        let  nameError="";
        let passError="";
        let emailError="";
        if(!this.state.email.includes('@'))
        {
            emailError="Given Email is inappropriate"
            this.setState({emailError})  ;
            return false;
        }
        if(this.state.pass!=this.state.cpass)
        {
            passError="Filled password does'nt match, make sure your passwords match"
            this.setState({passError})  ;
            return false;
        } 
        if(this.state.name==="" || this.state.clgname===""  || this.state.pass==="" || this.state.cpass==="" )     
        {
            nameError="This feild is necessary andf is to be filled by the user";
            this.setState({nameError})  
            return false;
        }

            return true;
    }
    handleChange(event)
    {
        let target = event.target;
        let value = target.value;
        let name = target.name;
        this.setState({
          [name]: value    });
    }    
    handleSubmit(event)
    {
        event.preventDefault();      
        let isValid=this.validate();
        if(isValid)
        {
            this.setState(initialState)
        }            
    }
    render()
    {
        return (
            <form onSubmit={this.handleSubmit} className='form'>
                <h5>* marked are to be filled</h5>
                <br/>
            <label className='label'>
              Full Name*:
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange}  className='text'/> 
            </label>  
             <div> {this.state.nameError}  </div>
              <br/>
              <label className='label'>
              Email*:
              <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className='text'/> 
            </label>      
            <div> {this.state.emailError}  </div>      
              <br/>
              <label className='label'>  
                  Current Year*:
              <select  value={this.state.clgyear} onChange={this.handleChange}  name="clgyear" className='text'>
              <option value="0">choose your current year</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
               </select>            
            </label>
            <br/>
            <label className='label'> 
              College Name*:
              <input type="text" value={this.state.clgname} onChange={this.handleChange} name="clgname" className='text'/> 
            </label>
            <div> {this.state.nameError}  </div>
            <br/>
            <label className='label'>
              Stream*:
              <select value={this.state.stream} onChange={this.handleChange} name="stream" className='text'>
                    <option value="yoyo">choose your stream</option>
                    <option value="SCIENCE">SCIENCE</option>
                    <option value="ARTS">ARTS</option>
                    <option value="COMMERCE">COMMERCE</option>                    
               </select> 
            </label>
            <br/>
            <label className='label'>
              Password*:
              <input type="password" value={this.state.pass} onChange={this.handleChange} name="pass"  className='text'/ > 
            </label>   
            <div> {this.state.nameError}  </div>         
              <br/>
              <label className='label'>
              Confirm Password*:
              <input type="password" value={this.state.cpass} onChange={this.handleChange} name="cpass" className='text'/> 
            </label>  
            <div> {this.state.passError}  </div>    
                
              <br/>
              <input type="checkbox"  className='check' />
                <label className='label'>I hearby declare that all my credientials are correct as per my knowledge</label>
              <br/>
            <input type="submit" value="Login" className='button'/>
          </form>

        )
    }
}

export default Login