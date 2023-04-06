import { Card as MaterialCard, CardContent } from "@mui/material";

interface CardProps {
  [index: string]: any;
}

export default function Card({ children, ...props }: CardProps = {}) {
  return (
    <MaterialCard sx={{ minWidth: 280, flex: 1 }} {...props}>
      <CardContent>{children}</CardContent>
    </MaterialCard>
  );
}
