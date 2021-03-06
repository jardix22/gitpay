import { connect } from 'react-redux'
import Task from '../components/task/task'
import { addNotification, addDialog, closeDialog } from '../actions/notificationActions'
import { loggedIn } from '../actions/loginActions'
import { assignTask } from '../actions/assignActions'
import { updateTask, fetchTask, paymentTask, syncTask, changeTaskTab } from '../actions/taskActions'

const mapStateToProps = (state, ownProps) => {
  return {
    completed: state.loggedIn.completed,
    logged: state.loggedIn.logged,
    dialog: state.dialog.open,
    user: state.loggedIn.user,
    task: state.task
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    isLogged: () => dispatch(loggedIn()),
    updateTask: (task) => dispatch(updateTask(task)),
    openDialog: () => dispatch(addDialog()),
    closeDialog: () => dispatch(closeDialog()),
    addNotification: (message) => dispatch(addNotification(message)),
    assignTask: (taskId, assignId) => dispatch(assignTask(taskId, assignId)),
    fetchTask: (taskId) => dispatch(fetchTask(taskId)),
    syncTask: (taskId) => dispatch(syncTask(taskId)),
    paymentTask: (taskId) => dispatch(paymentTask(taskId)),
    changeTab: (tab) => dispatch(changeTaskTab(tab))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task)
