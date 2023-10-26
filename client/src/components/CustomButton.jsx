import state from "../store";
import { useSnapshot } from "valtio";
import { getContrastingColor } from "../config/helpers";

const CustomButton = ({ type, title, handlerClick, customStyles }) => {
  const snap = useSnapshot(state);

  const generatedStyle = (type) => {
    if (type === "filled")
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    else if (type === "outline")
      return {
        borderColor: snap.color,
        color: snap.color,
        borderWidth: "1px",
      };
  };

  return (
    <button
      className={`px-2 py-1.5 rounded-md ${customStyles}`}
      style={generatedStyle(type)}
      type={type}
      onClick={handlerClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
