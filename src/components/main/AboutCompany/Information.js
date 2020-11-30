import React from 'react';
import Typography from '@material-ui/core/Typography';
import AboutCompany from './GetAboutCompany';

export default function PersistentDrawerLeft() {
  return (
    <div>
      <AboutCompany type = "Head"/>
      <Typography paragraph>
        <AboutCompany type = "ShortDescription"/>
      </Typography>
      <Typography paragraph>
        <AboutCompany type = "LongDescription"/>
      </Typography>
    </div>
  );
}

