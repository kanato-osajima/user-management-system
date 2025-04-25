// components/parts/CustomModal.tsx

import React, { useEffect } from "react";
import { Modal, Box, Typography, } from "@mui/material";
import CustomButton from "./CustomButton";

interface CustomModalProps {
  open: boolean;
  title: string;
  content: string;
  onClose: () => void;
  onConfirm?: () => void;
  modalVariant?: "default" | "primary" | "secondary" | "danger";
}

const getModalColorStyles = (variant: CustomModalProps["modalVariant"]) => {
  if (variant === "primary") {
    return {
      backgroundColor: "#efefff",
    };
  } else if (variant === "secondary") {
    return {
      backgroundColor: "#ffeaf4",
    };
  } else if (variant === "danger") {
    return {
      backgroundColor: "#ff9393",
      color: "white",
    };
  } else {
    return {
      backgroundColor: "white",
      color: "black",
    };
  }
};

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

const CustomModal: React.FC<CustomModalProps> = ({
  open,
  title,
  content,
  onClose,
  onConfirm,
  modalVariant = "default",
}) => {
  const modalStyles = getModalColorStyles(modalVariant);

  useEffect(() => {
    if (open) {
      const audio = new Audio("/sounds/sound.mp3");
      const playAudio = async () => {
        try {
          await audio.play();
        } catch (error) {
          console.error("音声再生エラー: ", error);
        }
      };
      playAudio();
    }
  }, [open]); 

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ ...style, ...modalStyles }}>
        <Typography variant="h6" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ mt: 2 }}>{content}</Typography>
        <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
          <CustomButton variantType="cancel" onClick={onClose} sx={{ mr: 2 }}>
            キャンセル
          </CustomButton>
          {onConfirm && (
            <CustomButton variantType="danger" sx={{ mr: 2 }} onClick={onConfirm}>
              確認
            </CustomButton>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
