import React,{Component} from 'react'
import {
    Form,
    Icon,
    Input,
    Button
} from 'antd'

import logo from '../../assets/images/logo.png'
import './index.less'

const Item = Form.Item

export default class Login extends Component{

    clickLogin = () =>{
        this.props.form.validateFields((error,values) =>{
            console.log('validateFields', error, values)
           if (!error){
               console.log('shouji',values)
           }else {
               this.props.form.resetFields()
           }
        })
    }
    checkPassword = (rule,value,callback) =>{
        console.log('checkPassword()', rule, value)
        if(!value){
            callback('必须输入密码')
        }else if(value.length<4 || value.length>8){
            callback('mimabixu8wei')
        } else {
            callback() // 如果不传参数代表成功
        }
    }

    render() {
        return (
            <div className='login'>
                <div className='login-header'>
                    <img src={logo} alt="logo"/>
                    React项目: 后台管理系统
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

    render(){
        const {getFieldDecorator} = this.props.form
        return(
            <Form className = 'login-form'>
                <Item>{
                getFieldDecorator('username',{
                    initialValue:'admin',
                    rules:[
                      {type:'string', required:true, message:'必须输入用户名'},
                      {min: 4, message: '长度不能少于4'}
                    ],
                })(
                    <Input placeholder="请输入用户名" prefix={<Icon type="user" />}/>
                )
                }
                </Item>
                <Form.Item>
                    {
                        getFieldDecorator('password',{
                            rules: [{validator: this.checkPassword}]
                        }) (
                            <Input type='password' placeholder='请输入密码' prefix={<Icon type="lock" />} />
                        )
                    }
                </Form.Item>
                <Form.Item>
                    <Button type="primary" className="login-form-button" onClick={this.clickLogin}>登录</Button>
                </Form.Item>

            </Form>
        )
    }

}
LoginForm = Form.create()(LoginForm)