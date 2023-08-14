export const links = [
  { id: 1, label: 'HOME', path: '/' },
  { id: 2, label: 'ABOUT', path: '/about', subLinks: [
    { id: 21, label: 'Company Profile', path: 'about/profile' },
    { id: 22, label: 'Quality and Standards', path: 'about/quality-standard' },
  ] },
  { id: 3, label: 'FACILITY', path: '/facility',
    subLinks: [
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
  { id: 4, label: 'SECTORS', path: '/sectors',
    subLinks: [
      { id: 41, label: 'Office', path: '/sectors/office' },
      { id: 42, label: 'City', path: '/sectors/city' },
      { id: 43, label: 'Retail', path: '/sectors/retail' },
      { id: 44, label: 'Residential', path: '/sectors/home' },
      { id: 45, label: 'Leisure', path: '/sectors/leisure' },
      { id: 46, label: 'Transport', path: '/sectors/transport' },
      { id: 47, label: 'Automotive Glass', path: '/sectors/automotive' },
      { id: 48, label: 'Bullet Resistance', path: '/sectors/bulletresistance' },
    ]
  },  
  { id: 5, label: 'GLASS PRODUCTS', path:'/products' },
  { id: 6, label: 'CONTACT', path: '/contact' },
]; 
