// app/users/[id]/edit/page.tsx

"use client"; // クライアントコンポーネントとしてマーク

import React from "react";
import EditUserForm from "../../../../components/EditUserForm";
import { useParams, useRouter } from "next/navigation";
import { Typography, Box } from "@mui/material";

// TODO: URLパラメータからユーザーIDを取得し、EditUserFormコンポーネントに渡す
const EditUserPage: React.FC = () => {
  const router = useRouter();

  const userId = Number(useParams().id);

  const handleSuccess = () => {
    router.push("/users");
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        <EditUserForm onSuccess={handleSuccess} userId={userId} />
      </Typography>
    </Box>
  );
};

export default EditUserPage;
