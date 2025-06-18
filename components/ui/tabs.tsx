"use client"

import React, { useState, ReactNode, ReactElement, isValidElement, cloneElement } from "react"

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue: string
  children: ReactNode
  className?: string
}

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  activeTab?: string
  setActiveTab?: (value: string) => void
}

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  children: ReactNode
  className?: string
  isActive?: boolean
}

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  children: ReactNode
  className?: string
  activeTab?: string
}

export const Tabs: React.FC<TabsProps> = ({ defaultValue, children, className = "", ...props }) => {
  const [activeTab, setActiveTab] = useState(defaultValue)

  return (
    <div className={className} {...props}>
      {React.Children.map(children, (child) => {
        if (!isValidElement(child)) return null
        if ((child.type as any).displayName === "TabsList") {
          return cloneElement(child as ReactElement<TabsListProps>, { activeTab, setActiveTab })
        }
        if ((child.type as any).displayName === "TabsContent") {
          return cloneElement(child as ReactElement<TabsContentProps>, { activeTab })
        }
        return child
      })}
    </div>
  )
}

export const TabsList: React.FC<TabsListProps> = ({
  children,
  className = "",
  activeTab,
  setActiveTab,
  ...props
}) => {
  return (
    <div className={`flex border-b border-gray-200 ${className}`} {...props}>
      {React.Children.map(children, (child) => {
        if (!isValidElement(child)) return null
        if ((child.type as any).displayName === "TabsTrigger") {
          return cloneElement(child as ReactElement<TabsTriggerProps>, {
            isActive: activeTab === (child.props as any).value,
            onClick: () => setActiveTab && setActiveTab((child.props as any).value),
          })
        }
        return child
      })}
    </div>
  )
}
TabsList.displayName = "TabsList"

export const TabsTrigger: React.FC<TabsTriggerProps> = ({
  value,
  children,
  className = "",
  isActive = false,
  onClick,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`px-4 py-2 -mb-px border-b-2 font-medium text-sm focus:outline-none ${
        isActive
          ? "border-orange-600 text-orange-600"
          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
      } ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
TabsTrigger.displayName = "TabsTrigger"

export const TabsContent: React.FC<TabsContentProps> = ({
  value,
  children,
  className = "",
  activeTab,
  ...props
}) => {
  if (activeTab !== value) return null
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}
TabsContent.displayName = "TabsContent"
