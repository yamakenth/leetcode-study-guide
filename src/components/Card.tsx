import { Card as MaterialCard, CardContent } from "@mui/material";

interface CardProps {
  [index: string]: any;
}

export default function Card({ children, ...props }: CardProps = {}) {
  return (
    <MaterialCard sx={{ maxWidth: 240, marginBottom: 4 }} {...props}>
      <CardContent>{children}</CardContent>
    </MaterialCard>
  );
}
