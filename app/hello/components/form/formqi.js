import React from 'react'
import { render } from 'react-dom'
import { Form, Input, Button} from 'uiw'

class FormQi extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            form:{
                name: 'zhangqi',
                password: '123456789',
            },
            rules:{
                name:[
                    { required:true,message:'请输入姓名'},
                    { min: 5,message:'长度不够'},
                ],
                password:[
                    { required: true , message:'请输入密码'},
                    { min: 5, message:'长度不够'},
                    { max: 10, message:'长度太大'}
                ]
            }
        };
    }

    onChange(key, e, value){
        const { form } = this.state;
        form[key] = value;
        this.setState({ form });
    }

    handleSubmit(e){
        e.preventDefault();
        this.form.validate((valid, dataValues) => {
            console.log("返回内容:", dataValues, valid)
            if (valid) {
                alert('submit success!');
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    }

    render(){
        const { form,rules } = this.state;
        const FormItem = Form.Item;
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
            <Form style={{ width: 500, padding: '30px 0 0 0' }} model={form} rules={rules} ref={(component) => { this.form = component }} >
                <FormItem label={<span>Name</span>} field="name" {...formItemLayout}>
                    <Input value={form.name} preIcon="user" placeholder="请输入用户名"  onChange={this.onChange.bind(this, 'name')} />
                </FormItem>
                <FormItem label={<span>Password</span>} field='password' {...formItemLayout}>
                    <Input value={form.password} preIcon="unlock" placeholder='请输入密码' type='password' onChange={this.onChange.bind(this,'password')} />
                </FormItem>
                <FormItem {...wrapperCol}>
                    <Button type='primary' size='big' onClick={this.handleSubmit.bind(this)}>提交</Button>
                </FormItem>
            </Form>
        )
    }
}

export default FormQi