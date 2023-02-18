import { Grid, Paper, Radio, RadioGroup } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import React from "react";

const FilterSelection = (props) => {
  const handleChange = (event) => {
    props.onRadioChange(event.target.value);
  };

  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Search By
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={props.radioValue}
              onChange={handleChange}
            >
              <FormControlLabel
                value="name"
                control={<Radio />}
                label="By Name"
              />
              <FormControlLabel
                value="email"
                control={<Radio />}
                label="By Email"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FilterSelection;