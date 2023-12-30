"use client";

import React, { PropsWithChildren } from "react";

const Button = (children) => (
  <button
    {...props}
    style={{
      backgroundColor: "blue",
      borderRadius: "5px",
      color: "white",
      padding: "2px 10px",
    }}
  >
    {children}
  </button>
);

const MDXComponents = {
  Button,
};

export default MDXComponents;
