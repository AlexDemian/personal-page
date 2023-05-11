import { Box, Card, Chip } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import { projects } from '../constants';
import { List } from '../components/List';

export const ProjectsPage: React.FC = () => {
  return (
    <>
      {projects.map((project) => {
        const { name, description, period, stack, role, resps, url, features } =
          project;
        return (
          <Card sx={{ mb: 1, px: 2, pt: 2, pb: 1 }} key={period + name}>
            <Typography fontWeight="bold" fontSize={18}>
              <a href={url} target="_blank" rel="noreferrer">
                {name}
              </a>
            </Typography>

            <Typography fontWeight="bold">{description}</Typography>
            <Typography>Period: {period}</Typography>
            <Typography>Role: {role}</Typography>
            <Typography>Responsibilities: {resps}</Typography>
            <Typography>Best of implemented features:</Typography>

            <Box sx={{ ml: 2 }}>
              <List items={features} />
            </Box>

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
      <Card
        sx={{ mb: 2, px: 2, py: 1 }}
        style={{
          background: 'rgba(255,255,255,0.5)',
        }}
      >
        <Typography variant="caption">
          {`Note: here are listed the most valued projects, but that is not
          an exhaustive list :)`}
        </Typography>
      </Card>
    </>
  );
};
