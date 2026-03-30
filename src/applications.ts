import { App, ApplicationsJSON } from "@/types/types";
import { default as applications } from "./applications.json";

export const apps: ApplicationsJSON = applications;

export const getApplicationsAsList = () => {
  let result: App[] = [];
  Object.values(apps).forEach(
    (category) => (result = result.concat(category.apps))
  );
  return result;
};

export const getRandomApps = (currentPath: string, number = 3) => {
  const apps = getApplicationsAsList();
  const randomApps = [];
  const flags: { [key: string]: string } = {};
  while (randomApps.length < number) {
    const app = apps[Math.floor(Math.random() * apps.length)];
    if ("/" + app.route === currentPath || flags["/" + app.route]) continue;
    flags["/" + app.route] = "exists";
    randomApps.push(app);
  }
  return randomApps;
};

export const getRandomAppsOfTheDay = (numOfReturnedApps: number) => {
  const apps = getApplicationsAsList();
  const day = new Date().getDay();
  const randomApps = [];
  const indexOfTheDay = day % apps.length;
  for (
    let i = indexOfTheDay;
    randomApps.length < numOfReturnedApps;
    i = i + 2
  ) {
    if (i >= apps.length) {
      i = 0 + (i - apps.length);
    }
    randomApps.push(apps[i]);
  }
  return randomApps;
};

export const getCategoryNameByRoute = (route: string) => {
  let result: { categoryName: string; categoryPath: string } | undefined;
  try {
    const routeArray = route.split("/");
    const lastElement = routeArray[routeArray.length - 1];
    Object.keys(apps).forEach((category) => {
      apps[category].apps.forEach((app) => {
        console.log(app.route, lastElement);
        if (app.route === lastElement) {
          result = {
            categoryName: category,
            categoryPath: apps[category].path,
          };
        }
      });
    });
  } catch (error) {
    console.error(error);
  }
  return result;
};
