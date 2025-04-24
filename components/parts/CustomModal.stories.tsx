// components/parts/CustomModal.stories.tsx

import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CustomModal from "./CustomModal";
import CustomButton from "../../components/parts/CustomButton";
import { Box } from "@mui/material";

const meta: Meta<typeof CustomModal> = {
  title: "Components/CustomModal",
  component: CustomModal,
};

export default meta;

type Story = StoryObj<typeof CustomModal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Box>
        <CustomButton variantType="primary" onClick={() => setOpen(true)}>
          モーダルを開く
        </CustomButton>
        <CustomModal
          open={open}
          title="タイトル"
          content="モーダルの内容"
          onClose={() => setOpen(false)}
          onConfirm={() => {
            alert("クリックされました");
            setOpen(false);
          }}
        />
      </Box>
    );
  },
};
