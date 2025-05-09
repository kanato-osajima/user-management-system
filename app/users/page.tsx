"use client";

import React, { useEffect, useState } from "react";
import { fetchUsers } from "../../utils/api";
import { User } from "../../types/User";
import { CircularProgress, Alert } from "@mui/material";
import UserList from "@/components/UserList";

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        console.log(data);
        setUsers(data);
      } catch (err) {
        setError("ユーザーの取得に失敗しました。" + err);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <>
      <UserList users={users} />
    </>
  );
};

export default UsersPage;
