
import type { Meta, StoryObj } from "@storybook/react";
import UserDetails from "./UserDetails";

// TODO: メタデータ
const meta: Meta<typeof UserDetails> = {
  title: 'Components/UserDetails',
  component: UserDetails,
};


export default meta;

// TODO: ストーリーの定義

type Story = StoryObj<typeof UserDetails>;

export const Default: Story = {
    args: {
        userId: 1, 
      },

};
