"use client";

import React from "react";
import UserDetails from "../../../../components/UserDetails";
import { useParams } from "next/navigation";
import { Typography, Box, Card } from "@mui/material";

const UserDetailsPage: React.FC = () => {
  const userId = Number(useParams().id);

  return (
    <Box sx={{ mt: 4, textAlign: "left" }}>
      <Typography variant="h4" gutterBottom>
        ユーザー詳細
      </Typography>
      <Card sx={{ width: 500, p: 2 }}>
        <UserDetails userId={userId} />
      </Card>
    </Box>
  );
};

export default UserDetailsPage;
