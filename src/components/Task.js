import React, {Component} from 'react';
import './Task.css';
import propTypes from 'prop-types';

class Task extends Component {
    StyleCompleted(){
        return{
            fontSize: '20px',
            color: this.props.task.done ? 'teal': 'red',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }
    render(){
        //enfoques para css
        // css en linea usando objetos de javascript
        // importando un archivo css externo
        const {task} = this.props;
        return <p style={this.StyleCompleted()}>
            {task.title} - {task.description} - {task.done} - {task.id} <input type="checkbox"/> 
            <button style={btnDelete}>x</button>
        </p>
    }
}
Task.propTypes = {
    task: propTypes.object.isRequired
}
const btnDelete = {
    fontSize: '18px',
    backgroundColor: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%'
}
export default Task;