import React from 'react'
import {render} from 'React-dom'
import { Form as FormView } from 'uiw'
import { Input as InputView } from 'uiw'
import { Button as ButtonView } from 'uiw'
import { Select, Radio, Checkbox, Tag, Switch, TimeSelect, InputNumber } from 'uiw'

class Forms extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            form: {
                name: "zhangqi",
                password: "",
                email: "wwww@qq.com",
                select: "选项4",
                timeSelect: new Date(2017, 6, 28, 15, 51),
                online: true,
                carte: ['湖北菜'],
                category_radio: ["保密"],
                category: ["香蕉", "橘子"],
                radio: 1,
                radioGroup: "", // 如果是数字类型，必须设置组件 value={6} 也是数字型
                radioGroupDisabled: "乔布斯",
                inputNumber: 0,
            },
            selectOptions: [
                { value: '选项1', label: '红葡萄酒' },
                { value: '选项2', label: '绍兴黄酒', disabled: true },
                { value: '选项3', label: '燕京啤酒' },
                { value: '选项4', label: '楚乡王白酒' },
                { value: '选项5', label: '五粮液' },
            ],
            tagRadioOptions: [
                { color: "purple", value: '保密' },
                { color: "orange", value: '男生' },
                { color: "green", value: '女生' }
            ],
            tagOptions: [
                { color: "purple", value: '苹果' },
                { color: "orange", value: '橘子' },
                { color: "green", value: '香蕉' }
            ],
            radioOptionsDisabled: [
                { label: '乔布斯', value: '乔布斯' },
                { label: '比尔盖茨', value: '比尔盖茨' },
                { label: '乔纳森', value: '乔纳森', disabled: true },
            ],
            checkboxOption: ['四川菜', '湖北菜', '湘菜', '粤菜'],
            rules: {
                name: [
                    { required: true, message: '请输入活动名称' },
                    { min: 4, message: '长度不够！' }
                ],
                timeSelect: [
                    { required: true, message: '请选择时间！' },
                ],
                password: [
                    { required: true, message: '不能为空！' },
                    { min: 6, message: '长度不够！' },
                    { max: 14, message: '长度超出！' }
                ],
                email: [
                    { type: 'email', message: '输入的不是E-mail!' }
                ],
                category: [
                    { required: true, message: '必须选择一个选项！' }
                ],
                carte: [
                    { required: true, message: '不能为空！' },
                    {
                        // 自定义校验规则 callback() 必须调用
                        validator: (rule, value, callback) => {
                            if (value.length > 1) {
                                callback();
                            } else {
                                callback(new Error("至少选两个选项"));
                            }
                        }
                    }
                ]
            }
        }
    }

    onChange(key, e, value) {
        const { form } = this.state;
        console.log("value:==:", key, value, e)
        form[key] = value;
        this.setState({ form });
    }

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
    }

    handleReset(e) {
        e.preventDefault();
        console.log("--reset22:", this.state.form)
        this.form.resetFields((model) => {
            this.setState({ form: model })
        });
    }

    render(){
        const { form, rules } = this.state;
        const FormItem = FormView.Item;
        const TagGroup = Tag.Group;
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
        }
        return (
            <FormView style={{ width: 500 }} ref={(component) => { this.form = component }} model={form} rules={rules}>
                <FormItem label={<span>用户名</span>} field="name" {...formItemLayout} >
                    <InputView
                        value={form.name}
                        placeholder="请输入用户名"
                        onChange={this.onChange.bind(this, 'name')} />
                </FormItem>
                <FormItem label="密码" field="password" help="这里显示对密码的帮助，比如只能英文字母"  {...formItemLayout} >
                    <InputView
                        // 注意字段 password
                        value={form.password}
                        type="password"
                        placeholder="请输入密码"
                        icon="lock"
                        onChange={this.onChange.bind(this, 'password')} />
                </FormItem>
                <FormItem label="输入数字" field="inputNumber" help="输入数字5~100"  {...formItemLayout} >
                    <InputNumber value={form.inputNumber} onChange={this.onChange.bind(this, 'inputNumber')} min="5" max="100"></InputNumber>
                </FormItem>
                <FormItem label="选择器" field="select" help="输入数字5~100"  {...formItemLayout} >
                    <Select onChange={this.onChange.bind(this, 'select')} value={form.select}>
                        {
                            this.state.selectOptions.map(elm => {
                                return <Select.Option key={elm.value} label={elm.label} value={elm.value} disabled={elm.disabled} />
                            })
                        }
                    </Select>
                </FormItem>
                <FormItem label="时间选择" field="timeSelect"  {...formItemLayout} >
                    <TimeSelect
                        start="08:30"
                        step="00:15"
                        end="18:30"
                        //maxTime="12:30"
                        //readOnly="2323"
                        minTime="9:30"
                        onChange={this.onChange.bind(this, 'timeSelect')}
                        value={form.timeSelect}
                        placeholder="选择时间"
                    />
                </FormItem>
                <FormItem label="是否在线" field="online" {...formItemLayout} >
                    <Switch checked={form.online}
                        onChange={this.onChange.bind(this, 'online')} />
                </FormItem>
                <FormItem label="邮箱" field="email" {...formItemLayout} >
                    <InputView
                        value={form.email}
                        placeholder="请输入邮箱"
                        onChange={this.onChange.bind(this, 'email')} />
                </FormItem>
                <FormItem label="分类单选" field="category_radio" {...formItemLayout} >
                    <TagGroup
                        options={this.state.tagRadioOptions}
                        checked={true}
                        isRadio={true}
                        checkedValues={form.category_radio}
                        onChange={this.onChange.bind(this, 'category_radio')}
                    />
                </FormItem>
                <FormItem label="分类多选" field="category" {...formItemLayout} >
                    <TagGroup
                        options={this.state.tagOptions}
                        checked={true}
                        checkedValues={form.category}
                        onChange={this.onChange.bind(this, 'category')}
                    />
                </FormItem>
                <FormItem label="多选" field="carte" {...formItemLayout} >
                    <Checkbox.Group
                        options={this.state.checkboxOption}
                        checkedValues={form.carte}
                        onChange={this.onChange.bind(this, 'carte')}
                    />
                </FormItem>
                <FormItem label="单选" field="radio" {...formItemLayout} >
                    <div style={{ margin: "7px 0" }}>
                        <Radio value={1} checked={form.radio === 1}
                            onChange={this.onChange.bind(this, "radio")}>备选项</Radio>
                        <Radio value={2} checked={form.radio === 2}
                            onChange={this.onChange.bind(this, "radio")}>备选项</Radio>
                    </div>
                </FormItem>
                <FormItem label="单选组" field="radioGroup" {...formItemLayout} >
                    <div style={{ margin: "7px 0" }}>
                        <Radio.Group value={form.radioGroup} onChange={this.onChange.bind(this, 'radioGroup')}>
                            <Radio value="3">高晓松</Radio>
                            <Radio value="6">周杰伦</Radio>
                            <Radio value="9">黄家驹</Radio>
                        </Radio.Group>
                    </div>
                </FormItem>
                <FormItem label="单选组配置" field="radioGroupDisabled" {...formItemLayout} >
                    <div style={{ margin: "7px 0" }}>
                        <Radio.Group
                            options={this.state.radioOptionsDisabled}
                            value={form.radioGroupDisabled}
                            onChange={this.onChange.bind(this, 'radioGroupDisabled')} />
                    </div>
                </FormItem>
                <FormItem {...wrapperCol}>
                    <ButtonView size="small" type="primary" onClick={this.handleSubmit.bind(this)}>提交</ButtonView>
                    <ButtonView size="small" onClick={this.handleReset.bind(this)}>重置</ButtonView>
                    <ButtonView size="small" onClick={() => {
                        console.log(this.state.form)
                    }}>查看State</ButtonView>
                </FormItem>
            </FormView>
        )
    }
}

export default Forms 
