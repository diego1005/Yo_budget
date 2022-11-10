export const homeCssRule = (userLogged, view) => {
    if (!userLogged) return "home home-vh";
    if (userLogged && view === "dashboard") return "home";
    return "home home-vh"

}