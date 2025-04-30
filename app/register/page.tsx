// app/register/page.tsx

"use client"; // クライアントサイドでのみ動作させることを指定

import React from "react";
import RegisterForm from "../../components/RegisterForm";
import { Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation"; 

// RegisterPageコンポーネントの定義
const RegisterPage: React.FC = () => {
  const router = useRouter();

  const handleSuccess = () => {
    router.push("/users");
  };

//テストGit 追記
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        新規ユーザー登録
      </Typography>
      <RegisterForm onSuccess={handleSuccess}/>
      
    </Box>
  );
};

export default RegisterPage;
