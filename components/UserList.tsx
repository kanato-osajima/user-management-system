"use client";

import { User } from "../types/User";
import UserCard from "../components/UserCard";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const [userList, setUserList] = useState<User[]>(users);

  const handleDelete = (deletedUserId: number) => {
    setUserList((initialUsers) =>
      initialUsers.filter((user: User) => user.id !== deletedUserId)
    );
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        ユーザー一覧
      </Typography>

      {userList.map((user, index) => {
        const colorVariant = index % 2 === 0 ? "primary" : "secondary";
        return (
        <UserCard
          key={user.id}
          user={user}
          onDelete={handleDelete}
          colorVariant={colorVariant}
        />
        );
      })}
    </Box>
  );
};

export default UserList;
