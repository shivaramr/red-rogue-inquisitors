import React from "react";

export default function Loading() {
  return (
    <div className="min-vh-75 d-flex align-items-center justify-content-center">
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
