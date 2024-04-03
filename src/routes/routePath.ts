const base = "/";
// const baseApiRoot = "http://localhost:3000" 
// const baseApi = baseApiRoot + "/api/v1/";
const app = "/app/v1/";

export const routePath = {
  home: base,
  app: {
    home: app + "home",
    about: app + "about",
    projects: app + "projects",
    contact : app + "contact",
    resume : app + "resume"
  }
}
