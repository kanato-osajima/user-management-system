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
          required
          fullWidth
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
          {...register("role", { required: "ロールは必須です" })}
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
