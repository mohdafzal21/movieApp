
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Paper,
  Avatar,
  Box,
  Grid,
  Typography,
  Chip,
  TextField,
  FormControlLabel,
  Button,
  Checkbox
} from "@material-ui/core";
const styles = {
  root: {
    display: "flex"
  },
  paperSurround: {
    padding: "2rem"
  },
  bigAvatar: {
    minWidth: 270,
    minHeight: 250
  }
};
class Students extends Component {
  state = {
    termNConditions: true,
    name : '',
    email : '',

  };
  handleChange = e => {
    console.log(e);
    this.setState({ ...this.state, [e.target.name]: e.target.checked });
  };

  
  render() {
    const {name,email} = this.state
    const { classes } = this.props;
    return (
      <Box>
        <Paper className={classes.paperSurround}>
          <Typography variant="h3" align="center" gutterBottom>
            Developer Profile
          </Typography>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid container direction="row" spacing={2}>
              <Grid item sm={6}>
                <TextField 
                label="Name" variant="outlined" 
                fullWidth
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                label="Email" 
                 variant="outlined"
                  fullWidth 
                  />
              </Grid>
              <Grid item sm={4}>
                <TextField
                  label="Skills (comma seperated)"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item sm={4}>
                <TextField
                  label="LinkedIn Profile"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item sm={4}>
                <TextField
                  label="GitHub Profile"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="About Me"
                  multiline={true}
                  rows={2}
                  rowsMax={4}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="row" justify="space-between">
                  <Grid item xs={10}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.checkedB}
                          onChange={this.handleChange}
                          name="termNConditions"
                          color="primary"
                          inputProps={{
                            "aria-label": "secondary checkbox"
                          }}
                        />
                      }
                      label=" I agree all the Terms & Conditions"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      SUBMIT
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    );
  }
}
export default withStyles(styles)(Students);