import { useCountriesName } from "@/hooks/useCountriesName";
import { LinkFlagImage } from "../atoms/LinkFlagImage";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, Box, Typography, IconButton } from "@mui/material";

// - Lista państw z flagą kraju przed nazwą
// - po kliknięciu w nazwę państwa przekierowanie na url /country/[kraj]

export const SideMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { countriesData } = useCountriesName();

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu button logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon onClick={() => setIsDrawerOpen(true)} />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="30vw" textAlign="center" role="sidemenu with links">
          <Typography variant="h6" component="div">
            Select Country
          </Typography>
          <Box width="full" flexDirection="column">
            <ul>
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
    // <div>
    //   <aside className=" fixed bg-gray-800 p-4 h-screen inset-y-0 top-[120px] left-0 overflow-y-auto w-30v max-w-10r">
    //     <div className="h-30v">
    //       <h2 className="text-lg font-bold mb-4">Select Country</h2>
    //       <ul>
    //         {countriesData.map((country) => {
    //           return (
    //             <li key={country.id}>
    //               <FlagImage country={country.country} />
    //             </li>
    //           );
    //         })}
    //       </ul>
    //     </div>
    //   </aside>
    // </div>
  );
};
