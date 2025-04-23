"use client";
import React, {  useState } from "react";
import { Box, Button, Alert } from "@mui/material";
import { softDeleteUser } from "../utils/api";

interface DeleteUserButtonProps {
  userId: number;
  onDelete: (userId: number) => void;
}

const DeleteUserButton: React.FC<DeleteUserButtonProps> = ({
  userId,
  onDelete,
}) => {
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleDelete = async () => {
    if (confirm("本当にこのユーザーを削除しますか？")) {
      try {
        await softDeleteUser(userId);
        onDelete(userId);
      } catch (error) {
        console.error(error);
        setSubmitError("削除に失敗しました。もう一度お試しください。");
      }
    }
  };

  return (
    <Box>
      <Button onClick={handleDelete} variant="contained" color="error">
        削除
      </Button>
      {submitError && (
        <Alert severity="error" sx={{ my: 2 }}>
          {submitError}
        </Alert>
      )}
    </Box>
  );
};

export default DeleteUserButton;
