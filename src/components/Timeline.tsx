import React from "react";
import BaseTimeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

interface TimelineProps {
  items: {
    caption: React.ReactNode;
    period: React.ReactNode;
    description: React.ReactNode;
  }[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <BaseTimeline>
      {items.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent sx={{ m: "auto 0" }}>
            <Typography>{item.caption}</Typography>
            <Typography>{item.period}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent sx={{ m: "auto 0" }}>
            <Typography>{item.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </BaseTimeline>
  );
};
