import { useState } from "react"

export const useView = () => {

    const [view, setView] = useState();

    const changeView = (newView) => {
        setView(newView)
    }

  return {
    view,
    changeView,
  }
}
