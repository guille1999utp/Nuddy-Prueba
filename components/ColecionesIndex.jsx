import React from "react";
import {
  CircularProgress,
  Typography,
  Alert,
  Grid,
  Container,
  Box,
} from "@mui/material";
export default function ColecionesIndex() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#A7D1E7",
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: "2px",
      }}
    >
      <Container>
        <Box
          display="flex"
          sx={{ justifyContent: "center", paddingTop: "30px" }}
        >
          <Typography component="h4" variant="h4">
            Coleciones
          </Typography>
        </Box>
        <Box>
          <Grid
            container
            spacing={2}
            sx={{ paddingTop: "30px", justifyContent: "center" }}
          >
            <Grid item>
              <Box
                sx={{
                  width: "350px",
                  height: "550px",
                  backgroundColor: "white",
                }}
              ></Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  width: "350px",
                  height: "550px",
                  backgroundColor: "white",
                }}
              ></Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  width: "350px",
                  height: "550px",
                  backgroundColor: "white",
                }}
              ></Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
