"// components/RegisterForm.tsx";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";
import { createUser } from "../utils/api";

// 必要に応じて利用する
interface RegisterFormInputs {
  name: string;
  email: string;
  role: string;
}

interface RegisterFormProps {
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

// TODO: 新規登録フォームコンポーネントを実装する
const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess, onError }) => {
  // 必要に応じて利用する
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    setSubmitError(null);
    try {
      await createUser(data); // Supabaseでユーザー登録
      onSuccess?.(); // 成功時コールバック
    } catch (error: any) {
      setSubmitError("登録に失敗しました。もう一度お試しください。");
      onError?.(error); // エラー時コールバック
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        新規登録
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={2}>
          <TextField
            label="名前"
            fullWidth
            {...register("name", {
              required: "入力が必須の項目です",
              maxLength: { value: 50, message: "50文字以内で入力してください" },
              pattern: {
                value: /^[ぁ-んァ-ン一-龥a-zA-Z\s]+$/,
                message: "名前に記号は使用できません",
              },
            })}
            error={!!errors.name}
            helperText={errors.name?.message || ""}
          />
        </Box>

        <Box mb={2}>
          <TextField
            label="メール"
            fullWidth
            type="email"
            {...register("email", {
              required: "メールは必須です",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "正しいメールアドレスを入力してください",
              },
              maxLength: {
                value: 100,
                message: "100文字以内で入力してください",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Box>

        <Box mb={2}>
          <TextField
            label="ロール"
            fullWidth
            {...register("role", {
              required: "ロールは必須です",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message:
                  "ロールはローマ字のみで入力してください（英字とスペース）",
              },
            })}
            error={!!errors.role}
            helperText={errors.role?.message}
          />
        </Box>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          登録
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

export default RegisterForm;
