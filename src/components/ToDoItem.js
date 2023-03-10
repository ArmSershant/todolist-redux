import { Box, Button } from "@mui/material"
import { connect } from "react-redux"
import { makeComplete, makeActive, deleteToDo } from "../redux/todos/actions"
const ToDoItem = ({ task, ...props }) => {
  const { enable, disable,remove } = props
  const style = task.completed ? { textDecoration: "line-through" } : null
  return (
    <div>
      <Box sx={{ padding: 1, margin: 2, background: "#f3e0fb", width: 400 }}>
        <h3 style={style}>{task.text}</h3>
        {task.completed ? (
          <Button onClick={() => enable(task.id)} variant="outlined">
            Cancel
          </Button>
        ) : (
          <Button onClick={() => disable(task.id)} variant="outlined">
            Done
          </Button>
        )}
        <Button onClick={() => remove(task.id)} variant="outlined">
          Delete
        </Button>
      </Box>
    </div>
  )
}
export default connect(null, (dispatch) => {
  return {
    enable: (id) => dispatch(makeActive(id)),
    disable: (id) => dispatch(makeComplete(id)),
    remove: (id) => dispatch(deleteToDo(id)),
  }
})(ToDoItem)
