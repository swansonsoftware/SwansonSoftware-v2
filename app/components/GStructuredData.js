import { useEffect } from "react"

function GStructuredData(props) {
  useEffect(() => {
    const type = props.type
    const headline = props.headline
    const published = props.datePublished
    const modified = props.dateModified
    const altmod = `"dateModified" : "${modified}",`
    const websiteName = props.name
    let structuredDataText = ""

    if (props.type == "WebSite") {
      structuredDataText = `{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "${websiteName}",
        "url": "https://www.swansonsoftware.com/"
        }`
    } else if (props.type == "Article" || props.type == "BlogPosting") {
      structuredDataText = `{
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
    } else if (props.type == "Recipe") {
      /* Format: 
      "datePublished": "2024-03-10"
      "recipeIngredient": [
        "400ml of pineapple juice",
        "100ml cream of coconut",
        "ice"
      ],
      "recipeInstructions": [
        {
          "@type": "HowToStep",
          "name": "Blend",
          "text": "Blend 400ml of pineapple juice and 100ml cream of coconut until smooth.",
          "url": "https://example.com/non-alcoholic-pina-colada#step1",
          "image": "https://example.com/photos/non-alcoholic-pina-colada/step1.jpg"
        },
        {
          "@type": "HowToStep",
          "name": "Fill",
          "text": "Fill a glass with ice.",
          "url": "https://example.com/non-alcoholic-pina-colada#step2",
          "image": "https://example.com/photos/non-alcoholic-pina-colada/step2.jpg"
        },
        {
          "@type": "HowToStep",
          "name": "Pour",
          "text": "Pour the pineapple juice and coconut mixture over ice.",
          "url": "https://example.com/non-alcoholic-pina-colada#step3",
          "image": "https://example.com/photos/non-alcoholic-pina-colada/step3.jpg"
        }
      ],
      */
      structuredDataText = `{
        "@context": "https://schema.org",
        "@type": "${type}",
        "name": "${props.name}",
        "author": [{
            "@type": "Person",
            "name": "Gregory Swanson",
            }],
        "datePublished": "${published}",
        "description": "${props.description}"
        "recipeCuisine": "${props.cuisine}",
        "prepTime": "PT1M",
        "cookTime": "PT2M",
        "totalTime": "PT3M",
        "keywords": "${props.keywords}",
        "recipeYield": "${props.serves}",
        "recipeCategory": "${props.category}",
        "recipeIngredient": [${props.ingredients}],
        "recipeInstructions": [${props.instructions}]
      }`
    }

    const script = document.createElement("script")
    script.setAttribute("type", "application/ld+json")
    script.setAttribute("id", "structure")
    script.textContent = structuredDataText
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])
}

export default GStructuredData
