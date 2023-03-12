import React from "react";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";

export const NotFoundPage = (
  <Card
    style={{
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <Typography variant="h3">404</Typography>
    <Typography variant="h5" sx={{ mb: 2 }}>
      Page not found
    </Typography>
    <img src="warning.jpg" style={{ width: "35%" }} alt="Oooops" />
  </Card>
);
