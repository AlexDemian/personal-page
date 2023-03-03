import { Box, Card, Chip } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import { projects } from "../constants";

export const ProjectsPage: React.FC = () => {
  return (
    <>
      {projects.map(({ name, description, period, stack, role, resps }) => {
        return (
          <Card sx={{ mb: 2, px: 2, pt: 2, pb: 1 }} key={period + name}>
            <Typography sx={{ fontWeight: "bold" }}>
              {period}: {name}
            </Typography>
            <Typography>{description}</Typography>

            <Typography>Role: {role}</Typography>
            <Typography>Responsibilities: {resps}</Typography>

            <Box sx={{ mt: 2 }}>
              {stack.map((point) => (
                <Chip
                  key={point}
                  label={point}
                  color="primary"
                  variant="filled"
                  sx={{ mr: 0.5, mb: 1 }}
                />
              ))}
            </Box>
          </Card>
        );
      })}
      <Card sx={{ mb: 2, px: 2, py: 1 }}>
        <i>
          Note: here are listed the most valued projects, but please note that
          this is not an exhaustive list :)
        </i>
      </Card>
    </>
  );
};
