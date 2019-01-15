import React from 'react'
import {
    Form,
    Icon,
    Input,
    Button
} from 'antd'

import logo from '../../assets/images/logo.png'
import './index.less'

const Item = Form.Item


export default class Login extends React.Component{
    render(){
        return(
            <div className="login">
              <div className="login-header">
                  <img src={logo} alt="logo"/>
              </div>
              <div className='login-content'>
                  <div className='login-box'>
                      <div className="title">用户登陆</div>
                      <LoginForm/>
                  </div>
              </div>
            </div>
        )
    }
}
class LoginForm extends React.Component{
    clickLogin = ()=>{
   this.props.form.validateFields((error,values) =>{
    if(!error){
        console.log('收集表板',error,values)
    }else {
        this.props.form.resetFields()
    }
    })
}
    checkPassword = (rule,value,callback) =>{
    if(!value){
        callback('必须输入')
    }else if(value.length<4 || value.length>8){
        callback('密码4-8')
    }else{
        callback()
    }

    }
    render(){
    const {getFieldDecorator } = this.props.form
        return(
           <Form className="login-form">
               <Item>{
                   getFieldDecorator('user',{
                       initialValue:'admin',
                       rule:[
                           {type:'string',required:true,message:'必须输入用户名'},
                           {min:4,message:'长度必须多于四'}
                       ],
                   })(<Input placeholder="请输入用户名" prefix={<Icon type="user"/>}/>)
               }
               </Item>
               <Item>{
                   getFieldDecorator('password',{
                       rules:[{validator:this.checkPassword}]
                   })(<Input type='password' placehodler="请输入密码" prefix={<Icon type ='lock'/>}/>)
               }
               </Item>
               <Form.Item>
                   <Button type='primary' className='login-form-button' onClick={this.clickLogin}>登录</Button>
               </Form.Item>
           </Form>
        )
    }
}
LoginForm = Form.create()(LoginForm)