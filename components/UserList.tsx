"use client"; 

import { User } from "../types/User";
import UserCard from "../components/UserCard";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const [userList,setUserList] = useState<User[]>(users);

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

      {userList.map((user) => (
        <UserCard key={user.id} user={user} onDelete={handleDelete}/>
      ))}
    </Box>
  );
};

export default UserList;
