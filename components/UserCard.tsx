import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button,Alert } from '@mui/material';
import { User } from '../types/User';
import Link from 'next/link';
import CustomButton from './parts/CustomButton';
import { softDeleteUser } from "../utils/api";

interface UserCardProps {
  user: User;
  onDelete: (userId: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user,onDelete }) => {
const [submitError, setSubmitError] = useState<string | null>(null);

  const handleDelete = async () => {
    if (confirm("本当にこのユーザーを削除しますか？")) {
      try {
        await softDeleteUser(user.id);
        onDelete(user.id);
      } catch (error) {
        console.error(error);
        setSubmitError("削除に失敗しました。もう一度お試しください。");
      }
    }
  };


  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography color="text.secondary">
          {user.email}
        </Typography>
        <Typography variant="body2">
          役割: {user.role}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} href={`/users/${user.id}/edit`}>編集</Button>
        <Button size="small" component={Link} href={`/users/${user.id}/details`}>詳細</Button>
        <CustomButton variantType="danger"  onClick={handleDelete}>削除</CustomButton>
      </CardActions>

      {submitError && (
              <Alert severity="error" sx={{ my: 2 }}>
                {submitError}
              </Alert>
            )}
    </Card>
  );
}

export default UserCard;