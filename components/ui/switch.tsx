import React from "react"

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  id?: string
}

export const Switch: React.FC<SwitchProps> = ({ checked, onCheckedChange, id, ...props }) => {
  return (
    <label htmlFor={id} className="inline-flex relative items-center cursor-pointer">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className="sr-only"
        {...props}
      />
      <div
        className={`w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800
          ${checked ? "bg-blue-600" : "bg-gray-200"}`}
      />
      <div
        className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition
          ${checked ? "translate-x-5" : "translate-x-0"}`}
      />
    </label>
  )
}
