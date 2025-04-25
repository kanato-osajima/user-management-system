// components/parts/CustomCard.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import CustomCard from "./CustomCard";
import CustomButton from "./CustomButton";

const meta: Meta<typeof CustomCard> = {
  title: 'Components/CustomCard',
  component: CustomCard,
};

export default meta;

type Story = StoryObj<typeof CustomCard>;

export const Default: Story = {
  args: {
    title: "カードタイトル",
    description:[ "これはカスタムカードの説明です。"],
    actions: (
      <>
        <CustomButton variantType="secondary">アクション1</CustomButton>
        <CustomButton variantType="danger">アクション2</CustomButton>
      </>
    ),
  },
};

export const WithoutActions: Story = {
  args: {
    title: "アクションなしのカード",
    description:[ "アクションが含まれていないカードの説明。"],
  },
};

export const Primary: Story = {
  args: {
    title: "プライマリーカード",
    description: ["プライマリースタイルのカードです。"],
    colorVariant: "primary",
    actions: (
      <CustomButton variantType="primary">OK</CustomButton>
    ),
  },
};

export const Secondary: Story = {
  args: {
    title: "セカンダリーカード",
    description: ["セカンダリースタイルのカードです。"],
    colorVariant: "secondary",
    actions: (
      <CustomButton variantType="secondary">次へ</CustomButton>
    ),
  },
};

export const Danger: Story = {
  args: {
    title: "警告カード",
    description: ["重要なエラーや警告を伝えるカードです。"],
    colorVariant: "danger",
    actions: (
      <CustomButton variantType="danger">削除</CustomButton>
    ),
  },
};