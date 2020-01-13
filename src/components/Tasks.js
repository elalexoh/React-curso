import React, {Component} from 'react';
import Task from './Task';
import propTypes from 'prop-types';

class Tasks extends Component {
    render(){
        return this.props.tasks.map(task => <Task key={task.id} task={task} />) 
    }
}
Tasks.propTypes = {
    tasks: propTypes.array.isRequired,
}

export default Tasks;