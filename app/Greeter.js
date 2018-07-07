import React,{Component} from 'react'
import config from './config.json'
import styles from './Greeter.css'
class Greeter extends Component{
    render(){
        return (
            <div>
                <div className={styles.root}>
                    {config.text}
                </div>
                <div className={styles.root}>
                    {config.author}
                </div>
                <div className={styles.root}>
                    {config.text}
                </div>
                <div className={styles.root}>
                    {config.author}
                </div>
                <div className={styles.root}>
                    {config.text}
                </div>
                <div className={styles.root}>
                    {config.author}
                </div>
            </div>
        )
    }
}

export default Greeter