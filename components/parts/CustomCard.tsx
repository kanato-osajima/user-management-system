// components/parts/CustomCard.tsx

import React from "react";
import { Card, CardContent, Typography, CardActions } from "@mui/material";

interface CustomCardProps {
  title: string;
  description: string[];
  actions?: React.ReactNode;
  colorVariant?: "default" | "primary" | "secondary" | "danger"; //カラーのバリアントを追加
}

//カラー変更のための関数を追加
const getCardColorStyles = (variant: CustomCardProps["colorVariant"]) => {
  if (variant === "primary") {
    return {
      backgroundColor: "#efefff",
    };
  } else if (variant === "secondary") {
    return {
      backgroundColor: "#ffeaf4",
    };
  } else if (variant === "danger") {
    return {
      backgroundColor: "#d32f2f",
      color: "white",
    };
  } else {
    return {
      backgroundColor: "white",
      color: "black",
    };
  }
};

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  description,
  actions,
  colorVariant = "default", //デフォルトのカラーを追加
}) => {
  const cardStyles = getCardColorStyles(colorVariant);

  return (
    <Card sx={{ minWidth: 275, mb: 2, trantion:"all 0.2s ease-in-out",
      "&:hover": {
        transform: "scale(1.04)",
      }, ...cardStyles }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography sx={{ whiteSpace: "pre-line" }}>{description}</Typography>
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
};

export default CustomCard;
