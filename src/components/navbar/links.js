export const links = [
  { id: 1, label: 'HOME', path: '/' },
  { id: 2, label: 'ABOUT', path: '/about', isDropdown: true, options: [
    { id: 21, label: 'Company Profile', path: 'about/profile' },
    { id: 22, label: 'Quality and Standards', path: 'about/quality-standard' },
  ] },
  { id: 3, label: 'FACILITY', path: '/facility',
  isDropdown: true,
    options: [
      { id: 31, label: 'CNC Cuttng table', path: '/facility/cnc' },
      { id: 32, label: 'Dulling', path: '/facility/dulling' },
      { id: 33, label: 'Waterjet cutting / CNC Processing', path: '/facility/waterjet' },
      { id: 34, label: 'Drilling', path: '/facility/drilling' },
      { id: 35, label: 'Washing', path: '/facility/washing' },
      { id: 36, label: 'Tempering', path: '/facility/tempering' },
      { id: 37, label: 'Laminating', path: '/facility/laminating' },
      { id: 37, label: 'Double Glazing', path: '/facility/double-glazing' },
    ]
},
  { id: 4, label: 'SECTORS', path: '/sectors',isDropdown: true,
    options: [
      { id: 41, label: 'Office', path: '/sectors/office' },
      { id: 42, label: 'City', path: '/sectors/city' },
      { id: 43, label: 'Retail', path: '/sectors/retail' },
      { id: 44, label: 'Home', path: '/sectors/home' },
      { id: 45, label: 'Leisure', path: '/sectors/leisure' },
      { id: 46, label: 'Transport', path: '/sectors/transport' },
      { id: 47, label: 'World', path: '/sectors/world' },
    ]
  },  
  { id: 5, label: 'GLASS PRODUCTS', path:'/products' },
  { id: 6, label: 'CONTACT', path: '/contact' },
]; 


// const links = [
//   { id: 1, label: 'Home', path: '/' },
//   { id: 2, label: 'About', path: '/about', isDropdown: true, options: [
//     { id: 21, label: 'Company Profile', path: 'about/profile' },
//     { id: 22, label: 'Quality and Standards', path: 'about/quality-standard' },
//   ] },
//   { id: 3, label: 'Services', path: '/services' },
//   { id: 4, label: 'Contact', path: '/contact' },
//   // { id: 5, label: 'Dropdown', isDropdown: true, options: ['Option 1', 'Option 2', 'Option 3'] },
// ];