import { useEffect, useRef } from "react"

function GTag() {
  const script = useRef(document.createElement("script"))
  const gtagScript = useRef(document.createElement("script"))

  function removeScriptElements() {
    document.head.removeChild(script.current)
    document.head.removeChild(gtagScript.current)
  }
  useEffect(() => {
    script.current.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-LSV7YLJSC6")
    script.current.setAttribute("async", "")
    document.head.appendChild(script.current)

    let gtagText = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-LSV7YLJSC6');`
    gtagScript.current.textContent = gtagText
    document.head.appendChild(gtagScript.current)
    return () => removeScriptElements()
  }, [])
}

export default GTag
