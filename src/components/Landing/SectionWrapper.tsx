import React from 'react'

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  contentMaxWidth?: string;
}

export const SectionWrapper = ({ children, className, contentMaxWidth }: SectionWrapperProps) => {
  return (
    <section className={`${className}`}>
      <div className={`mx-auto p-2 ${contentMaxWidth ? contentMaxWidth : 'max-w-340'}`}>
        {children}
      </div>
    </section>
  )
}
