import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div>
      <SketchPicker
        className="absolute left-full bottom-2.5 ml-3"
        color={snap.color}
        onChange={(color) => (state.color = color.hex)}
        disableAlpha={true}
      />
    </div>
  );
};

export default ColorPicker;
