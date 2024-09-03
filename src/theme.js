
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { palette } from "@mui/icons-material";

export const tokens = (mode) =>({
    
...(mode === "dark"

    ?
    {
        grey: {
            100: "#edeeef",
            200: "#dcdee0",
            300: "#babdc1",
            400: "#a9adb2",
            500: "#979da3",
            600: "#868c93",
            700: "#757c84",
            800: "#646c75",
            900: "#535c66"
        },
        primary: {
            "bg":"#141A21",
            "card":"#1c252e",
            "accent":"#28323D",
            "hover":"#1D242B",
        },
        greenAccent: {
            100: "#c8fad5",
            200: "#00a86f",
            300: "#007867",
            400: "#004b50",
            500: "#9ef01a",
            "light": "#1C3F36",
            "hover": "#122627"
        },
        redAccent: {
            100: "#ffe3d5",
            200: "#fe3030",
            300: "#b71834",
            400: "#79092f",
            500: "#ef233c",
            "light":"#402D2F",
            "hover": "#64122086"
        },
        blueAccent: {
            100: "#ccf4fe",
            200: "#078dee",
            300: "#0451ab",
            400: "#012971",
            500: "#00a8e8",
            "light": "#bde0fe",
            "hover": "#132332"
        },
        yellowAccent:{
            100:"#fef3d3",
            200:"#fda92d",
            300:"#b66816",
            400:"#713200",
            500:"#ffd500",
            "light":"#403A27",
            "hover": "#262521"
        },
        fonts: {
            primary: "'Source Sans Pro', sans-serif",
            secondary: "'Poppins', sans-serif",
            tertiary: "'Inter', sans-serif",
            quaternary: "'Nunito', sans-serif",
          }
    }
    :
    {
        grey: {
            900: "#edeeef",
            800: "#dcdee0",
            700: "#babdc1",
            600: "#a9adb2",
            500: "#979da3",
            400: "#868c93",
            300: "#757c84",
            200: "#646c75",
            100: "#535c66",
        },
        primary: {
            "bg": "#FFFFFF",
            "card": "#f5f6f8",
            "accent": "#F4F6F8",
            "hover": "#ECEFF2",
        },
        greenAccent: {
            500: "#9ef01a",
            400: "#c8fad5",
            300: "#5be49c",
            200: "#00a86f",
            100: "#004b50",
            "light": "#1C3F36",
            "hover": "#EBF8F4"
        },
        redAccent: {
            500: "#ef233c",
            400: "#ffe3d5",
            300: "#ffc1ac",
            200: "#fe3030",
            100: "#79092f",
            "light":"#402D2F",
            "hover": "#FFEFEF"
        },
        blueAccent: {
            500: "#00a8e8",
            400: "#ccf4fe",
            300: "#68cdf9",
            200: "#078dee",
            100: "#012971",
            "light": "#bde0fe",
            "hover": "#ecf6ff"
        },
        yellowAccent:{
            500: "#ffd500",
            400:"#fef3d3",
            300:"#fed67f",
            200:"#fda92d",
            100:"#713200",
            "light":"#403A27",
            "hover":"#fff8ee" 
        },
        fonts: {
            primary: "'Source Sans Pro', sans-serif",
            secondary: "'Poppins', sans-serif",
            tertiary: "'Inter', sans-serif",
            quaternary: "'Nunito', sans-serif",
          }
    }
)
});

//mui theme settings
// theme.js
export const themeSettings = (mode, fontFamily, colorScheme) => {
    const colors = tokens(mode);
  
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
            background : {
                default : "#141A21",
            }
        }
        :
        {
            background : {
                default : "#f5f6f8",
            } 
        }),
      },
      typography: {
        fontFamily: fontFamily || colors.fonts.primary,
        fontSize: 12,
        h1: {
          fontFamily: fontFamily || colors.fonts.primary,
          fontSize: 40,
        },
        h2: {
          fontFamily: fontFamily || colors.fonts.primary,
          fontSize: 32,
        },
        h3: {
          fontFamily: fontFamily || colors.fonts.primary,
          fontSize: 24,
        },
        h4: {
          fontFamily: fontFamily || colors.fonts.primary,
          fontSize: 20,
        },
        h5: {
          fontFamily: fontFamily || colors.fonts.primary,
          fontSize: 18,
        },
        h6: {
          fontFamily: fontFamily || colors.fonts.primary,
          fontSize: 14,
        },
      },
    };
  };
  

// context for color mode
// theme.js
export const colorModeContext = createContext({
    toggleColorMode: () => {},
    changeFont: () => {},
    changeColorScheme: () => {},
    colorScheme:"blue"
  });
  
  export const useMode = () => {
    const [mode, setMode] = useState("dark");
    const [fontFamily, setFontFamily] = useState("'Source Sans Pro', sans-serif");
    const [colorScheme, setColorScheme] = useState('blue'); // Default color scheme
  
    const colorMode = useMemo(
      () => ({
        toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
        changeFont: (font) => setFontFamily(font),
        changeColorScheme: (color) => setColorScheme(color),
        colorScheme,
      }),
      [mode, fontFamily, colorScheme]
    );
  
    const theme = useMemo(() => createTheme(themeSettings(mode, fontFamily, colorScheme)), [mode, fontFamily, colorScheme]);
  
    return [theme, colorMode];
  };
  