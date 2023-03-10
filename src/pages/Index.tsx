import { Box, Card, Chip, Grid } from "@mui/material";
import React from "react";
import { ColumnStack, StackItem } from "../components/Stack";
import { resps, skills, summary, summaryHeader } from "../constants";
import Typography from "@mui/material/Typography";
import { List } from "../components/List";

const SkillChip: React.FC<{
  isPrimary?: boolean;
  label: string;
}> = (props) => (
  <Chip
    label={props.label}
    variant={props.isPrimary ? "filled" : "outlined"}
    color={props.isPrimary ? "primary" : "default"}
    sx={{ mr: 0.5, my: 0.5 }}
  />
);

export const IndexPage: React.FC = () => {
  const skillItems: StackItem[] = skills.map(({ caption, stack }) => {
    return {
      caption,
      body: stack.map((skill) => (
        <SkillChip
          key={skill}
          label={skill.replaceAll("*", "")}
          isPrimary={!skill.includes("*")}
        />
      )),
    };
  });

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} mb={2}>
        <Card sx={{ p: 2 }}>
          <Typography fontWeight="bold" sx={{ mb: 1 }}>
            Summary
          </Typography>
          {summaryHeader.map((row) => (
            <Typography key={row}>{row}</Typography>
          ))}
          <Typography sx={{ mt: 2 }}>
            Reasons I could be a valuable addition to your team:
          </Typography>
          <Box>
            <List items={summary} />
          </Box>
        </Card>
      </Grid>

      <Grid item xs={12} mb={2}>
        <Card sx={{ p: 2 }}>
          <Typography fontWeight="bold" sx={{ mb: 1 }}>
            Familiar responsibilities
          </Typography>
          <Box>
            <List items={resps} />
          </Box>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card
          sx={{ p: 1 }}
          style={{
            background: "rgba(255,255,255,0.5)",
            borderBottomLeftRadius: "unset",
            borderBottomRightRadius: "unset",
          }}
        >
          <Chip
            label="Blue chip"
            variant="filled"
            color="primary"
            size="small"
            sx={{ mr: 0.5, mb: 0.5 }}
          />

          <Typography variant="caption" lineHeight={1.8}>
            indicates at least intermediate proficiency
          </Typography>
          <br />
          <Chip
            label="White chip"
            variant="outlined"
            color="default"
            size="small"
            sx={{ mr: 0.5 }}
            style={{ backgroundColor: "white" }}
          />

          <Typography variant="caption" lineHeight={1.8}>
            means I dealt with the feature a long time ago or/and I got only
            basic undestanding during a short-term single project or playing
            sandbox
          </Typography>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card
          style={{
            borderTopLeftRadius: "unset",
            borderTopRightRadius: "unset",
          }}
        >
          <ColumnStack items={skillItems} />
        </Card>
      </Grid>
    </Grid>
  );
};
