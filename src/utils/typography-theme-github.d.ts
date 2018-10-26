declare module 'typography-theme-github' {
  interface Theme {
    title: string;
    baseFontSize: string;
    baseLineHeight: number;
    headerFontFamily: string[];
    bodyFontFamily: string[];
    scaleRatio: number;
    bodyColor: string;
    headerWeight: number;
    bodyWeight: string;
    boldWeight: number;
    blockMarginBottom: number;
    overrideStyles: (arg: any) => any;
  }
}
