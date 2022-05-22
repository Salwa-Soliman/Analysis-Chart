import React from "react";
import { Spinner } from "react-bootstrap";
export default function Loading() {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <Spinner animation="border" variant="primary" />
    </div>
  );
}
