declare module 'typography-theme-github' {
  interface theme {
    title: string,
    baseFontSize: string,
    baseLineHeight: number,
    headerFontFamily: Array<string>,
    bodyFontFamily: Array<string>,
    scaleRatio: number,
    bodyColor: string,
    headerWeight: number,
    bodyWeight: string,
    boldWeight: number,
    blockMarginBottom: number,
    overrideStyles: Function,
  }
}