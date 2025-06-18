"use client"

import React from "react"

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string
}

export const Label: React.FC<LabelProps> = ({ className = "", children, ...props }) => {
  return (
    <label
      className={`block text-sm font-medium text-gray-700 dark:text-gray-300 ${className}`}
      {...props}
    >
      {children}
    </label>
  )
}
