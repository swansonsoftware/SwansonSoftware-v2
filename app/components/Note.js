import React, { useContext } from "react"
import { HashLink } from "react-router-hash-link"

function Notes(props) {
  return (
    <ol>
      {props.notes.map((note, index) => {
        const children = [
          { text: note.text1, isLink: note.text1IsLink, link: note.text1Link },
          { text: note.text2, isLink: note.text2IsLink, link: note.text2Link },
          { text: note.text3, isLink: note.text3IsLink, link: note.text3Link }
        ]

        return (
          <li key={note.listId} id={note.listId}>
            <span className="footnote__ref">
              <HashLink to={note.noteId} className="footnote--cite">
                ^
              </HashLink>

              {children
                .filter(child => child.text) // only render existing ones
                .map((child, i) =>
                  child.isLink ? (
                    <HashLink key={`${note.listId}-${i}`} className="wrapper__article__outbound-link" to={child.link}>
                      {child.text}
                    </HashLink>
                  ) : (
                    <React.Fragment key={`${note.listId}-${i}`}>{child.text}</React.Fragment>
                  )
                )}
            </span>
          </li>
        )
      })}
    </ol>
  )
}
export default Notes
