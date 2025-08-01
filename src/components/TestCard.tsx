// src/components/TestCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TestCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Test Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is a test card.</p>
      </CardContent>
    </Card>
  );
}