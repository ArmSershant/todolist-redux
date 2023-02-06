import { FormControl, FormControlLabel, RadioGroup, Radio } from "@mui/material"
import { useDispatch } from "react-redux"
import { changeFilter } from "../redux/filter/actions"
const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value))
  }
  return (
    <div>
      <FormControl>
        <RadioGroup defaultValue="All" onChange={handleChange} row>
          <FormControlLabel value="All" control={<Radio />} label="all" />
          <FormControlLabel
            value="Completed"
            control={<Radio />}
            label="done"
          />
          <FormControlLabel value="Active" control={<Radio />} label="active" />
        </RadioGroup>
      </FormControl>
    </div>
  )
}
export default Filter
