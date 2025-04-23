"use client";

import React, { useEffect, useState } from "react";
import {  Box, Typography, } from "@mui/material";
import { fetchUserById, } from "../utils/api";
import { User } from "@/types/User";

interface UserDetailsProps {
  userId: number;
}

const UserDetails: React.FC<UserDetailsProps> = ({
  userId
}) => {
    const [user, setUser] = useState<User | null>(null); //型を定義


  useEffect(() => {
    const loadUser = async () => {
        const fetchedUser = await fetchUserById(userId);
        setUser(fetchedUser);
      };
  
      loadUser();
    }, [userId]);

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", mt: 4 }}>
    <Typography variant="h5" gutterBottom>
      ユーザー詳細
    </Typography>
    {user && 
    <Typography variant="h6" gutterBottom>
      ID: {user.id}
    </Typography>
    }
    {user &&
    <Typography variant="h6" gutterBottom>
      名前: {user.name}
    </Typography>
    }
    {user && 
    <Typography variant="body1" gutterBottom>
      メールアドレス: {user.email}
    </Typography>
    }
    {user && 
    <Typography variant="body1" gutterBottom>
      役割: {user.role}
    </Typography>
    }
  </Box>


  );
};

export default UserDetails;
