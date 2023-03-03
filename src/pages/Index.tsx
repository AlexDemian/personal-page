import { Box, Card, Chip, Grid } from "@mui/material";
import React from "react";
import { ColumnStack, StackItem } from "../components/Stack";
import { skills, summary, summaryHeader } from "../constants";
import Typography from "@mui/material/Typography";

const SkillChip: React.FC<{ isPrimary?: boolean; label: string }> = (props) => (
  <Chip
    label={props.label}
    variant={props.isPrimary ? "filled" : "outlined"}
    color={props.isPrimary ? "primary" : "default"}
    sx={{ mr: 0.5, my: 0.5 }}
  />
);

export const SkillsPage: React.FC = () => {
  const skillItems: StackItem[] = skills.map(({ caption, stack }) => {
    return {
      caption,
      body: stack.map((skill) => (
        <SkillChip
          label={skill.replaceAll("*", "")}
          isPrimary={!skill.includes("*")}
        />
      )),
    };
  });

  skillItems.push({
    caption: <i>* Tip:</i>,
    body: (
      <i>
        <SkillChip label="Blue chip" isPrimary />
        indicates at least intermediate proficiency
        <br />
        <SkillChip label="White chip" />
        means I dealt with the feature a long time ago or/and I got only basic
        undestanding during a short-term single project or playing sandbox
      </i>
    ),
  });

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} mb={2}>
        <Card sx={{ px: 3 }}>
          <Typography sx={{ mt: 2, mb: 1, mx: 2 }}>{summaryHeader}</Typography>
          <Box>
            <ul>
              {summary.split(".").map((part) => (
                <li key={part}>
                  <Typography>{part}.</Typography>
                </li>
              ))}
            </ul>
          </Box>
        </Card>
      </Grid>

      <Grid item xs={12} mb={0.5}>
        <Card>
          <ColumnStack items={skillItems} />
        </Card>
      </Grid>
    </Grid>
  );
};
