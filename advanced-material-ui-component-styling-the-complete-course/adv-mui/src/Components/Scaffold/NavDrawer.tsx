import {
  AppBar,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";

export default function NavDrawer() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Advanced MUI Styling
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="temporary" open={true}>
        <div>
          <List>
            {[
              { text: "Input Form" },
              { text: "Contact Card Grid" },
              { text: "Data Grid" },
            ].map((nav, index) => (
              <ListItem key={nav.text}>{nav.text}</ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main></main>
    </div>
  );
}
