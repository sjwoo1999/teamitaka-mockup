// custom.d.ts

// ✅ CSS 파일 import용 타입 선언
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// ✅ SVG 파일 import용 타입 선언 (이미 잘 작성하셨음)
declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
