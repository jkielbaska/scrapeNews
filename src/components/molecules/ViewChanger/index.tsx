import ViewModuleIcon from "@mui/icons-material/ViewModule"; //block view
import ReorderIcon from "@mui/icons-material/Reorder";
import { useDispatch } from "react-redux";
import { setLayout } from "@/redux/layoutSlice";

export const ViewChanger = () => {
  const dispatch = useDispatch();

  const handleLayoutChange = (newLayout: string) => {
    dispatch(setLayout(newLayout));
  };

  return (
    <div className="flex justify-end gap-5 pr-5 pt-5">
      <button role="blockbutton" onClick={() => handleLayoutChange("block")}>
        <ViewModuleIcon />
      </button>{" "}
      |
      <button role="listbutton" onClick={() => handleLayoutChange("list")}>
        <ReorderIcon />
      </button>
    </div>
  );
};
