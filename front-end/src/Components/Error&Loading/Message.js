import React from "react";
import { Alert } from "react-bootstrap";
export default function Message({ variant, children }) {
  return (
    <Alert
      variant={variant}
      style={{
        "--bs-alert-margin-bottom": "0",
      }}
    >
      {children}
    </Alert>
  );
}
