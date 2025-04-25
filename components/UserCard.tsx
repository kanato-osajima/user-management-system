import React, { useState } from "react";
import { Alert, Box } from "@mui/material";
import { User } from "../types/User";
import Link from "next/link";
import CustomButton from "./parts/CustomButton";
import { softDeleteUser } from "../utils/api";
import CustomCard from "./parts/CustomCard";
import CustomModal from "./parts/CustomModal";

interface UserCardProps {
  user: User;
  onDelete: (userId: number) => void;
  colorVariant: "default" | "primary" | "secondary" | "danger";
}

const UserCard: React.FC<UserCardProps> = ({ user, onDelete,colorVariant }) => {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [customModalOpen, setCustomModalOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await softDeleteUser(user.id);
      onDelete(user.id);
      setCustomModalOpen(false);
    } catch (error) {
      console.error(error);
      setSubmitError("削除に失敗しました。もう一度お試しください。");
    }
  };

  return (
    <>
      <CustomCard
        title={user.name}
        description={[`メール:${user.email}\n`, `役割:${user.role}`]}
        actions={
          <Box sx={{ display: "flex", gap: 1 }}>
            <CustomButton component={Link} href={`/users/${user.id}/edit`}>
              編集
            </CustomButton>
            <CustomButton
              variantType="secondary"
              component={Link}
              href={`/users/${user.id}/details`}
            >
              詳細
            </CustomButton>
            <CustomButton
              variantType="danger"
              onClick={() => setCustomModalOpen(true)}
            >
              削除
            </CustomButton>
            {submitError && (
              <Alert severity="error" sx={{ my: 2 }}>
                {submitError}
              </Alert>
            )}
          </Box>
        }
        colorVariant={colorVariant}
      />
      <CustomModal
        open={customModalOpen}
        title="ユーザー削除"
        content="本当にこのユーザーを削除しますか？"
        onClose={() => setCustomModalOpen(false)}
        onConfirm={() => {
          handleDelete();
        }}
        modalVariant="danger"
      />
    </>
  );
};

export default UserCard;
