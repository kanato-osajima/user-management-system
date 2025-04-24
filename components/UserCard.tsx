import React, { useState } from "react";
import { Button, Alert } from "@mui/material";
import { User } from "../types/User";
import Link from "next/link";
import CustomButton from "./parts/CustomButton";
import { softDeleteUser } from "../utils/api";
import CustomCard from "./parts/CustomCard";

interface UserCardProps {
  user: User;
  onDelete: (userId: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
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
    <CustomCard
      title={user.name}
      description={[`メール:${user.email}\n`, `役割:${user.role}`]}
      actions={
        <>
          <Button size="small" component={Link} href={`/users/${user.id}/edit`}>
            編集
          </Button>
          <Button
            size="small"
            component={Link}
            href={`/users/${user.id}/details`}
          >
            詳細
          </Button>
          <CustomButton variantType="danger" onClick={handleDelete}>
            削除
          </CustomButton>
          {submitError && (
            <Alert severity="error" sx={{ my: 2 }}>
              {submitError}
            </Alert>
          )}
        </>
      }
    />
  );
};

export default UserCard;
