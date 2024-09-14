// components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          {/* Add menu icon here */}
        </IconButton>
        <Typography variant="h6" component="h1">
          Payroll Dashboard
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;


//more advanced navbar with navigation links:

// // components/Navbar.js
// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, IconButton, Link } from '@mui/material';

// const Navbar = () => {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <IconButton edge="start" color="inherit" aria-label="menu">
//           {/* Add menu icon here */}
//         </IconButton>
//         <Typography variant="h6" component="h1">
//           Payroll Dashboard
//         </Typography>
//         <nav>
//           <Link to="/" color="inherit">
//             Home
//           </Link>
//           <Link to="/payroll" color="inherit">
//             Payroll
//           </Link>
//           <Link to="/employees" color="inherit">
//             Employees
//           </Link>
//         </nav>
//         <Button color="inherit">Login</Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;



// Using React Router to create a more dynamic navbar with routing capabilities.

// // components/Navbar.js
// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, IconButton, Link } from '@mui/material';
// import { BrowserRouter, Route, Link as RouterLink } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <IconButton edge="start" color="inherit" aria-label="menu">
//           {/* Add menu icon here */}
//         </IconButton>
//         <Typography variant="h6" component="h1">
//           Payroll Dashboard
//         </Typography>
//         <nav>
//           <RouterLink to="/" color="inherit">
//             Home
//           </RouterLink>
//           <RouterLink to="/payroll" color="inherit">
//             Payroll
//           </RouterLink>
//           <RouterLink to="/employees" color="inherit">
//             Employees
//           </RouterLink>
//         </nav>
//         <Button color="inherit">Login</Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;