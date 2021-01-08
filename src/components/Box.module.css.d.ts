declare namespace BoxModuleCssNamespace {
  export interface IBoxModuleCss {
    container: string;
  }
}

declare const BoxModuleCssModule: BoxModuleCssNamespace.IBoxModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: BoxModuleCssNamespace.IBoxModuleCss;
};

export = BoxModuleCssModule;
