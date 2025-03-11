import { useEffect } from "react"

function GStructuredData(props) {
  useEffect(() => {
    const type = props.type
    const headline = props.headline
    const published = props.datePublished
    const modified = props.dateModified
    const altmod = `"dateModified" : "${modified}",`

    let structuredDataText = `{
        "@context": "https://schema.org",
        "@type": "${type}",
        "headline": "${headline}",
        "datePublished": "${published}", ${modified ? altmod : ""}
        "author": [{
            "@type": "Person",
            "name": "Gregory Swanson",
            "url": "https://www.linkedin.com/in/gregory-swanson-7b92b68/"
          }]
      }`

    const script = document.createElement("script")
    script.setAttribute("type", "application/ld+json")
    script.setAttribute("id", "structure")
    script.textContent = structuredDataText
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])
}

export default GStructuredData
