import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import FakeProfilePhoto from "./unnamed.png"

export function Home() {
  return (
    <Box my={2}>

      <Grid container>
        <Grid sm={4}>
          <img src={FakeProfilePhoto}/>
        </Grid>
        <Grid sm={8}>
          <div>
            <Box my={5}>
              <Typography variant="h3">Yuekun Feng</Typography>
            </Box>
            <Box my={1}>
              <Typography> Third year student and University of British Columbia (graduate at 2021).</Typography>
            </Box>
            <Box my={1}>
              <Typography>Majors in computer science.</Typography>
            </Box>
            <Box my={1}>
              <Typography> アニメ fun, tech fun, entry level "auto-tune remix-themed content" editor.</Typography>
            </Box>
            <Box my={1}>
              <Typography> QiushanBeikun, 丘山北鲲 is a pen name, but will be accepted for official contacts.</Typography>
            </Box>
            <Box my={1}>
              <Typography> ⬅ // i dont want to put a Linkedin profile photo here. [wasted emoji]</Typography>
            </Box>
          </div>
        </Grid>

      </Grid>
    </Box>
  );
}