// components/parts/CustomButton.tsx

import { Button, ButtonProps } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  variantType?: "primary" | "secondary" | "danger" | "gradient" | "radius";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variantType = "primary",
  variant = "contained",
  ...props
}) => {
  let color: ButtonProps["color"] = "primary";
  let customStyles = {};

  if (variantType === "primary") {
    color = "primary";
  } else if (variantType === "secondary") {
    color = "secondary";
  } else if (variantType === "danger") {
    color = "error";
  } else if (variantType === "gradient") {
    customStyles = {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      color: "white",
    };
  } else if (variantType === "radius") {
    color = "primary";
    customStyles = {
      borderRadius: "50px",
    };
 }
    return (
      <Button color={color} variant={variant} sx={customStyles} {...props}>
        {props.children}
      </Button>
    );
 
};

export default CustomButton;
