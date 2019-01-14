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

                    </div>
                </div>
            </div>
        )
    }
}
class LoginForm extends React.Component{
    render(){
        return(
            <Form className = 'login-from'>
                <Item>
                    <Input placeholder="请输入用户名" prefix={<Icon type="user"></Icon>}/>
                </Item>
                <Item>
                    <Input type='password' placeholder='请输入密码' prefix={<Icon type="lock" />} />
                </Item>
                <Item>
                    <Button type='primary' className='login-form-button' onClick={this.clickLogin}>登录</Button>
                </Item>

            </Form>
        )
    }

}
