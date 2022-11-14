export const homeCssRule = (userLogged, view) => {
    if (!userLogged) return "home home-vh";
    if (userLogged && view === "dashboard") return "home";
    if (userLogged && view === "profile") return "home home-vh";
    return "home";

}