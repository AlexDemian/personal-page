import { Box, Paper, Stack, styled, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1.5),
  borderRadius: "unset",
}));

export type StackItem = {
  caption: React.ReactNode;
  body: React.ReactNode;
};

export const ColumnStack: React.FC<{ items: StackItem[] }> = ({ items }) => {
  return (
    <Stack>
      {items.map((item, index) => {
        return (
          <Item key={index}>
            <Typography sx={{ mb: 1 }}>
              <b>{item.caption}</b>
            </Typography>
            <Box>{item.body}</Box>
          </Item>
        );
      })}
    </Stack>
  );
};
