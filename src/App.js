import React from 'react'
import ResponsiveDrawer from './scenes/global/layout';
import { colorModeContext, tokens, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { FontProvider } from './contexts/FontContext';
import '../node_modules/@syncfusion/ej2-base/styles/material.css';
import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';
import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
import '../node_modules/@syncfusion/ej2-treegrid/styles/material.css';
import '../node_modules/@syncfusion/ej2-react-gantt/styles/material.css';
import { Route, Routes } from 'react-router-dom';
import Register from './scenes/register';
import Dashboard from './scenes/dashboard';
import Analytics from './scenes/analytics';
import Banking from './scenes/banking';
import FullFeaturedCrudGrid from './scenes/arr';
import AssestsDepreciation from './scenes/assets&depreciation';
import InputUpload from './scenes/inputUpload';
import Mail from './scenes/mail';
import LogIn from './scenes/logIn';
import LandingPage from './scenes/home';
import Hotels from './scenes/hotels';

const App = () => {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  // const [isSidebar, setIsSidebar] = useState(true);
  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <FontProvider>
        <div className="app" >
           {/* <ResponsiveDrawer /> */}
           {/* <Router> */}
            <Routes>
              <Route path="/login" element={<LogIn />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<LandingPage />} />
              <Route path="/" element={<ResponsiveDrawer />}>
              <Route path="/" element={<Dashboard />} />
            {/* <Route path="/ecommerce" element={<Ecommerce />} /> */}
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/banking" element={<Banking />} />
              <Route path="/arr" element={<FullFeaturedCrudGrid />} />
              <Route path="/ad" element={<AssestsDepreciation />} />
              <Route path="/inputUpload" element={<InputUpload />} />
              <Route path="/mail" element={<Mail />} />
              <Route path="/hotels" element={<Hotels />} />
                {/* Other nested routes */}
              </Route>
            </Routes>
        {/* </Router> */}
        </div>
        </FontProvider>
      </ThemeProvider>
    </colorModeContext.Provider>  
  )
}

export default App