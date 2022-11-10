export const displayView = (userLogged, view) => {
    view = view.toLowerCase();
    if (!userLogged) return "userinn";
    if (userLogged && view !== "userinn") return view;
    if (userLogged && view === "userinn") return "profile";
}