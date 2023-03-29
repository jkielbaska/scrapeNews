import { useCountriesName } from "@/hooks/useCountriesName";
import { LinkFlagImage } from "../../atoms/LinkFlagImage";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, Box, Typography, IconButton } from "@mui/material";

export const SideMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { countriesData } = useCountriesName();

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        role="menubutton"
        aria-label="menu button logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        role="sidemenulinks"
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="30vw" textAlign="center">
          <Typography variant="h6" component="div">
            Select Country
          </Typography>
          <Box width="full" flexDirection="column">
            <ul role="countrieslist">
              {countriesData.map((country) => {
                return (
                  <li key={country.id}>
                    <Box p={1} display="flex" alignItems={"flex-start"}>
                      <LinkFlagImage country={country.country} />
                    </Box>
                  </li>
                );
              })}
            </ul>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
