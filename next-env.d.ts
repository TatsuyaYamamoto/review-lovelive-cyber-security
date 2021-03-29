/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }

  const classNames: IClassNames;
  export = classNames;
}

declare module "*.png" {
  const dataUrl: string;
  export default dataUrl;
}

declare module "hsimp-purescript";

declare module "*.mdx";
