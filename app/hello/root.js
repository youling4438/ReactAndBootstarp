import React from 'react'
import { render } from 'react-dom'
import Button from "./components/button/button";
import Form from "./components/form/form";
import Forms from "./components/form/forms";
import FormQi from "./components/form/formqi";

class Root extends React.Component{
    render() {
        return (
            <div>
                <h1>this is my first react component</h1>
                <h4>this is button</h4>
                <Button />
                <h4>this is form</h4>
                <Form/>
                <h4>this is forms</h4>
                <Forms/>
                <h4>this is formQi</h4>
                <FormQi/>
                <h4>Ending</h4>
            </div>
        )
    }
}

export default Root;