import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function SectionWrapper({ children, id, className = '' }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={className}
    >
      {children}
    </section>
  );
}
