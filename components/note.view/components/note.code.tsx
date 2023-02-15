import { Code } from "../../../code/model/note"

export const NoteComponentCode = ({code}:Props) => {
  return <div className="around" dir="ltr">
    <code>
      <pre>
        {code.text}
      </pre>
    </code>
  </div>
}

interface Props {
  code:Code
}
