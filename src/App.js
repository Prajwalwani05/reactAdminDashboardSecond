import React from 'react'
import ResponsiveDrawer from './scenes/global/layout';
import { colorModeContext, useMode } from "./theme";
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
import SubstationData from './scenes/substationData';
import Ecommerce from './scenes/ecommerece';
import Teams from './scenes/team';
import Users from './scenes/users';
import Products from './scenes/products';
import Orders from './scenes/orders';
import List from './scenes/hotels/List';
import Details from './scenes/hotels/Details';
import Create from './scenes/hotels/Create';
import DistrictDetails from './scenes/substationData/districtDetails';

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <FontProvider>
        <div className="app" >
            <Routes>
              <Route path="/login" element={<LogIn />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<LandingPage />} />
              <Route path="/" element={<ResponsiveDrawer />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Ecommerce" element={<Ecommerce />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/banking" element={<Banking />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/arr" element={<FullFeaturedCrudGrid />} />
              <Route path="/ad" element={<AssestsDepreciation />} />
              <Route path="/inputUpload" element={<InputUpload />} />
              <Route path="/mail" element={<Mail />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="/hotels/list" element={<List />} />
              <Route path="/hotels/details" element={<Details />} />
              <Route path="/hotels/create" element={< Create />} />

              <Route path="/districtWiseSummary" element={<SubstationData />} />
              <Route path="/districtWiseSummary/districtDetails/:id" element={<DistrictDetails />} />

              <Route path="/users" element={<Users />} />
              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
              </Route>
            </Routes>
        </div>
        </FontProvider>
      </ThemeProvider>
    </colorModeContext.Provider>  
  )
}

export default App