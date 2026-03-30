export function capitalize(str: string): string {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

export const isProduction = process.env.NODE_ENV === "production";
export const GA_TRACKING_ID = "UA-177377061-1";

export const isMobile = () => {
  let width = 0;
  if (typeof window !== "undefined") {
    width = Math.max(window.screen.width, window.innerWidth);
  }

  return width < 1000;
}

export const getAppIconPath = (appRoute: string) => {
  return "/icons/" + appRoute + ".png"
}