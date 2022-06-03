import { useState, useEffect, Fragment } from "react";
import {
  Box as BoxUI,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Logo from "components/Logo";
import { ListAlt, LineStyle } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";

const list = [
  { label: "Blog", link: "/admin/blog", icon: ListAlt },
  { label: "Projects", link: "/admin/projects", icon: LineStyle },
];

const Box = styled(BoxUI)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
}));

const Navbar = () => {
  const { pathname } = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isIcon, setIsIcon] = useState(false);
  const theme = useTheme();

  const scrollHandler = () => {
    setIsMobile(window.innerWidth < theme.breakpoints.values.md);
    setIsIcon(window.innerWidth < theme.breakpoints.values.sm);
  };

  useEffect(() => {
    window.addEventListener("resize", scrollHandler);
    scrollHandler();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Box px={isMobile ? 3 : 15} pt={3} component="nav" sx={{ zIndex: 1 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography component="figure">
              <Logo />
            </Typography>
          </Grid>
          <Grid item>
            {!isMobile && (
              <List className="nav">
                {list.map((item, index) => (
                  <Link to={item.link} key={index}>
                    <ListItem
                      button
                      className={`nav__item ${item.link === pathname ? "active" : ""}`}
                    >
                      <ListItemText primary={<Typography color="white">{item.label}</Typography>} />
                    </ListItem>
                  </Link>
                ))}
              </List>
            )}
          </Grid>
        </Grid>
      </Box>
      {isMobile && <NavButton list={list} path={pathname} icon={isIcon} />}
    </Fragment>
  );
};

export default Navbar;

const NavButton = (props: {
  list: Array<{ label: string; link: string; icon: any }>;
  path: string;
  icon: boolean;
}) => {
  const { list, path, icon } = props;

  return (
    <div className="navmobile">
      <Grid container>
        {list.map((e, i) => (
          <Grid
            key={i}
            item
            className={`navmobile_item ${path === e.link ? "active" : ""}`}
            style={{ width: `calc((100%) / ${list.length})` }}
            component={Link}
            to={e.link}
          >
            <e.icon fontSize="large" />
            {!icon && <Typography sx={{ lineHeight: 0, mb: 1.5 }}>{e.label}</Typography>}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
