import {
  AppBar,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";

import ContactForm from "../Form/ContactForm";

import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

export default function NavDrawer() {
  return (
    <div>
      <BrowserRouter>
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
                { text: "Input Form", route: "/form" },
                { text: "Contact Card Grid", route: "/grid" },
                { text: "Data Grid", route: "/datagrid" },
              ].map((nav, index) => (
                <ListItem>
                  <Link to={nav.route}>{nav.text}</Link>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
        <main>
          <Routes>
            <Route path="/" element={<ContactForm />}></Route>
            <Route path="/form" element={<ContactForm />}></Route>
            <Route path="/grid" element={<div>grid</div>}></Route>
            <Route path="/table" element={<div>table</div>}></Route>
            <Route path="/datagrid" element={<div>datagrid</div>}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
