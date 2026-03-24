import { ChangeEvent, useState } from "react";
import "./Form.scss";
export default function Form(props: { createNewToDo: (text: string) => void }) {
  const [text, setText] = useState<string>("");
  const formSubmit = () => {
    if (text) {
      props.createNewToDo(text);
      console.log(text);
      setText("");
    }
  };

  return (
    <div className="form-wrapper">
      <form action="#" onSubmit={formSubmit}>
        <label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button></button>
        </label>
      </form>
    </div>
  );
}
