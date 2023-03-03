import { Timeline } from "../components/Timeline";
import { Avatar, Card, Grid, Typography } from "@mui/material";
import {
  age,
  location,
  avatarPath,
  fullName,
  since,
  socialLinks,
  companies,
} from "../constants";

const now = new Date();

export const Profile: React.FC = () => {
  const companyItems = companies.map(
    ({ period, position: description, name, url }) => {
      return {
        period,
        description,
        caption: (
          <a target="_blank" rel="noreferrer" href={url}>
            {name}
          </a>
        ),
      };
    }
  );

  return (
    <Card>
      <Grid container alignItems="center" direction="column" padding={2}>
        <Grid item mb={4}>
          <Typography variant="h5">{fullName}</Typography>
        </Grid>

        <Grid item mb={4}>
          <Avatar
            alt={fullName}
            src={avatarPath}
            sx={{ width: 250, height: 250 }}
          />
        </Grid>
        <Typography variant="h6">Full-stack developer (remote)</Typography>
        <Grid item>
          <Typography>
            Since: {since} ({now.getFullYear() - since} years)
          </Typography>
          <Typography>English grade: Intermediate</Typography>
          <Typography>Age: {age} y.o.</Typography>
          <Typography>Location: {location} 🇺🇦</Typography>
          {socialLinks.map(({ title, url }) => (
            <Typography key={title}>
              <a target="_blank" rel="noreferrer" href={url}>
                {title}
              </a>
            </Typography>
          ))}
        </Grid>
      </Grid>
      <Timeline items={companyItems} />
    </Card>
  );
};
