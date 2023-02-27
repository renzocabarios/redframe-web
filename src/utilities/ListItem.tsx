import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";

interface ListItemProps {
  title: string;
}

function ListItem(props: ListItemProps) {
  const { title } = props;
  return (
    <>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </>
  );
}

export default ListItem;
