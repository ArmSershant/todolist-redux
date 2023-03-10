import { Box, TextField } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addToDo } from "../redux/todos/actions"
const Add = () => {
  const dispatch = useDispatch()
  const [text, setText] = useState()
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(addToDo(text))
    }
  }
  return (
    <Box>
      <TextField
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </Box>
  )
}
export default Add
