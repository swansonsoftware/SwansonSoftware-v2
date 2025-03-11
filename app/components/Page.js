import { useEffect } from "react"

function Page(props) {
  useEffect(() => {
    document.title = `${props.title} | SwansonSoftware`
    window.scrollTo(0, 0)
  }, [props.title])

  // let pagestyle = "page"

  if (props.background == "light") {
    // pagestyle = props.pagestyle
    document.body.classList.remove("dark")
  }
  return props.children
}

export default Page
