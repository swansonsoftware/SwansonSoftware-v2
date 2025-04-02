import { useEffect } from "react"

function CanonicalLink(props) {
  useEffect(() => {
    // <link rel="canonical" href="https://swansonsoftware.com/principles/reviews" />

    const link = document.createElement("link")
    link.setAttribute("rel", "canonical")
    link.setAttribute("href", props.href)

    document.head.appendChild(link)
    return () => document.head.removeChild(link)
  }, [])
}

export default CanonicalLink
