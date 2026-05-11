export const APP_WIDTH_MIN = 350;
export const phantomAppId =
  process.env.NEXT_PUBLIC_PHANTOM_APP_ID ?? "PHANTOM_APP_ID_INVALID";

export const userInit = {
  err: "",
  warn: "",
  account: "",
};
export type UserInitT = typeof userInit;
