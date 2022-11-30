import { BiLoader } from "react-icons/bi";
import "./style.css";

export default function Loading() {
  return (
    <div className="loading">
      <BiLoader color="#e80b3e" size={40} className="loading_icon" />
    </div>
  );
}
