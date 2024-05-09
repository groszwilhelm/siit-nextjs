import { HiOutlineX } from "react-icons/hi";

export default function Alert({ type, text, closeAlert }) {
  return (
    <div className={"alert " + type}>
      <p>
        {text} <HiOutlineX onClick={closeAlert} />
      </p>
    </div>
  );
}
