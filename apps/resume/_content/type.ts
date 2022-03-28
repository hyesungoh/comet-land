export type MapToStringType<T extends string> = {
  [K in T]: string;
};
