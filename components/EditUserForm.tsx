// components/EditUserForm.tsx

"use client"; // クライアントコンポーネントとしてマーク

import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";
import { fetchUserById, updateUser } from "../utils/api";

// 必要に応じて利用する
interface EditUserFormInputs {
  name: string;
  email: string;
  role: string;
}

interface EditUserFormProps {
  userId: number;
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

// TODO: ユーザー編集フォームコンポーネントを実装する
const EditUserForm: React.FC<EditUserFormProps> = ({
  userId,
  onSuccess,
  onError,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditUserFormInputs>();

  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const user = await fetchUserById(userId);
        if (user) {
          reset({
            name: user.name,
            email: user.email,
            role: user.role,
          });
        } else {
          setSubmitError("ユーザーが見つかりませんでした");
        }
      } catch (error) {
        setSubmitError("ユーザーの取得に失敗しました");
      }
    };

    loadUser();
  }, [userId, reset]);

  const onSubmit: SubmitHandler<EditUserFormInputs> = async (data) => {
    try {
      await updateUser(userId, data);
      onSuccess?.();
    } catch (error) {
      setSubmitError("登録に失敗しました。もう一度お試しください。");
      onError?.(error);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        ユーザー情報編集
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={2}>
          <TextField
            label="名前"
            required
            fullWidth
            InputLabelProps={{ shrink: true }}
            {...register("name", { required: "入力が必須の項目です" })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </Box>

        <Box mb={2}>
          <TextField
            label="メール"
            required
            fullWidth
            InputLabelProps={{ shrink: true }}
            type="email"
            {...register("email", {
              required: "メールは必須です",
            })}
          />
        </Box>

        <Box mb={2}>
          <TextField
            label="ロール"
            required
            fullWidth
            InputLabelProps={{ shrink: true }}
            {...register("role", { required: "ロールは必須です" })}
          />
        </Box>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          更新
        </Button>
      </form>

      {submitError && (
        <Alert severity="error" sx={{ my: 2 }}>
          {submitError}
        </Alert>
      )}
    </Box>
  );
};

export default EditUserForm;
