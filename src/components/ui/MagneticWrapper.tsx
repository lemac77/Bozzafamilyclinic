import { ReactElement, cloneElement } from "react";
import { useMagnetic } from "../../hooks/useMagnetic";

interface MagneticWrapperProps {
  children: ReactElement;
  strength?: number;
}

export function MagneticWrapper({ children, strength = 0.2 }: MagneticWrapperProps) {
  const ref = useMagnetic(strength);

  return cloneElement(children, {
    ref,
    className: `${children.props.className || ""} custom-cursor-active`,
  });
}
