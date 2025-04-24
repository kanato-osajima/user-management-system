// components/parts/CustomCard.tsx

import React from "react";
import { Card, CardContent, Typography, CardActions } from "@mui/material";

interface CustomCardProps {
  title: string;
  description: string;
  actions?: React.ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  description,
  actions,
}) => {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {description}
        </Typography>
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
};

export default CustomCard;
