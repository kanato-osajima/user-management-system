// components/parts/CustomButton.tsx

import { Button, ButtonProps } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  variantType?:
    | "primary"
    | "secondary"
    | "danger"
    | "gradient"
    | "radius"
    | "cancel";
  component?: React.ElementType;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variantType = "primary",
  variant = "contained",
  ...props
}) => {
  let color: ButtonProps["color"] = "primary";
  let customStyles: any = {
    trantion: "all 0.2s ease-in-out",
    "&:hover": {
      transform: "translateY(-2px)",
      opacity: 0.9,
    },
    "&:active": {
      transform: "scale(0.95)",
    },
  };

  if (variantType === "primary") {
    color = "primary";
  } else if (variantType === "secondary") {
    color = "secondary";
  } else if (variantType === "danger") {
    color = "error";
  } else if (variantType === "gradient") {
    customStyles = {
      ...customStyles,
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      color: "white",
    };
  } else if (variantType === "radius") {
    color = "primary";
    customStyles = {
      ...customStyles,
      borderRadius: "50px",
    };
  } else if (variantType === "cancel") {
    color="inherit"
    variant="outlined"
    customStyles = {
      ...customStyles,
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)!important",
      color: "white",
      borderColor: "#ffffff", 
      borderWidth: "10px", 
    };
  }
  return (
    <Button color={color} variant={variant} sx={customStyles} {...props}>
      {props.children}
    </Button>
  );
};

export default CustomButton;
