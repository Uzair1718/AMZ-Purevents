/// <reference types="vite/client" />

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module 'framer-motion' {
  import { ComponentType, ReactNode, HTMLAttributes, AriaAttributes } from 'react';

  export interface MotionProps extends HTMLAttributes<HTMLElement>, AriaAttributes {
    initial?: any;
    animate?: any;
    exit?: any;
    whileHover?: any;
    whileTap?: any;
    transition?: any;
    layout?: boolean | string;
    layoutId?: string;
    children?: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    href?: string;
    target?: string;
    rel?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    whileInView?: any;
    viewport?: any;
    type?: string;
  }

  export interface MotionValue<T = number> {
    get(): T;
    set(value: T): void;
  }

  export interface ScrollInfo {
    x: MotionValue<number>;
    y: MotionValue<number>;
  }

  export function useScroll(): ScrollInfo;
  export function useTransform<T = number>(
    input: MotionValue<number> | number,
    inputRange: number[],
    outputRange: T[]
  ): MotionValue<T>;

  export const motion: {
    [key: string]: ComponentType<MotionProps>;
  };

  export const AnimatePresence: ComponentType<{
    children: ReactNode;
    mode?: 'sync' | 'wait' | 'popLayout';
  }>;
}

declare module 'react-hot-toast' {
  import { ComponentType } from 'react';

  export interface ToasterProps {
    position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
    toastOptions?: {
      duration?: number;
      style?: React.CSSProperties;
      className?: string;
    };
  }

  export const Toaster: ComponentType<ToasterProps>;
  export const toast: {
    success: (message: string) => void;
    error: (message: string) => void;
    loading: (message: string) => void;
    dismiss: (toastId: string) => void;
  };
} 