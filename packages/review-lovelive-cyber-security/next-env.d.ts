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

declare var gtag: Gtag.Gtag;
declare namespace Gtag {
  interface Gtag {
    (command: "config", targetId: string, config?: any): void;
    (command: "event", eventName: string, eventParams?: any): void;
  }
}
