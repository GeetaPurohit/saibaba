"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { ReactNode } from "react";

interface ScrollButtonProps extends ButtonProps {
  targetId: string;
  children: ReactNode;
}

export default function ScrollButton({ 
  targetId, 
  children, 
  ...props 
}: ScrollButtonProps) {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button {...props} onClick={scrollToSection}>
      {children}
    </Button>
  );
}
