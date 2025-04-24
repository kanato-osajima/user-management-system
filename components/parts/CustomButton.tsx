// components/parts/CustomButton.tsx

import { Button, ButtonProps } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  variantType?: "primary" | "secondary" | "danger";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variantType = "primary",
  variant = "contained",
  ...props
}) => {
  let color: ButtonProps["color"] = "primary";

  if (variantType === "primary") {
    color = "primary";
  } else if (variantType === "secondary") {
    color = "secondary";
  } else if (variantType === "danger") {
    color = "error";
  }

  return <Button color={color} variant={variant} {...props} >
    {props.children}
    </Button>;
};

export default CustomButton;
