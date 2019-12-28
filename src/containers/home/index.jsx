import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export function Home() {
  return (
    <Box my={2}>
      <div>
        <Typography variant="h5">Home</Typography>
      </div>
      <Typography>Transferring from previous website </Typography>
    </Box>
  );
}