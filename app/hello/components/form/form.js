import React from 'react'
import { render } from 'react-dom'
import { Form as FormView } from 'uiw'
import { Input as InputView } from 'uiw'
import { Button as ButtonView } from 'uiw'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: '',
                password: '',
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称' },
                    { min: 5, message: '长度不够！' }
                ],
                password: [
                    { required: true, message: '不能为空！' },
                    { min: 6, message: '长度不够！' },
                    { max: 14, message: '长度超出！' }
                ]
            }
        }
    }

    onChange(key, e, value) {
        const { form } = this.state;
        form[key] = value;
        this.setState({ form });
    };
    
    handleSubmit(e) {
        e.preventDefault();
        this.form.validate((valid, dataValues) => {
            console.log("返回内容:", dataValues, valid)
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    };

    render(){
        const { form, rules } = this.state;
        const FormItem = FormView.Item;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
                className: "colspanlab"
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
                className: "colspan"
            },
        };
        const wrapperCol = {
            wrapperCol: {
                xs: { span: 24, offset: 0, },
                sm: { span: 14, offset: 4, },
            },
        };
        return (
            <FormView style={{ width: 500, padding: "30px 0 0 0" }} className="sss" ref={(component) => { this.form = component }} model={form} rules={rules}>
                <FormItem label={<span>用户名</span>} field="name" {...formItemLayout} >
                    <InputView
                        value={form.name}
                        preIcon="user"
                        placeholder="请输入用户名"
                        onChange={this.onChange.bind(this, 'name')} />
                </FormItem>
                <FormItem label="密码" field="password" {...formItemLayout} >
                    <InputView
                        // 注意字段 password
                        value={form.password}
                        preIcon="unlock"
                        type="password"
                        placeholder="请输入密码"
                        onChange={this.onChange.bind(this, 'password')} />
                </FormItem>
                <FormItem  {...wrapperCol}>
                    <ButtonView size="small" type="primary" onClick={this.handleSubmit.bind(this)} >提交</ButtonView>
                </FormItem>
        </FormView>)
    };
}

export default Form;