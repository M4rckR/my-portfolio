declare module 'react-mouse-parallax' {
    import * as React from 'react';
  
    interface MouseParallaxContainerProps {
      className?: string;
      globalFactorX?: number;
      globalFactorY?: number;
      resetOnLeave?: boolean;
      children?: React.ReactNode;
    }
  
    interface MouseParallaxChildProps {
      factorX?: number;
      factorY?: number;
      className?: string;
      children?: React.ReactNode;
    }
  
    export class MouseParallaxContainer extends React.Component<MouseParallaxContainerProps> {}
    export class MouseParallaxChild extends React.Component<MouseParallaxChildProps> {}
}