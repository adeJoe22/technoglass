export const links = [
  { id: 1, label: 'HOME', path: '/' },
  { id: 2, label: 'ABOUT', path: '/about',
  sublinks: [
    { id: 21, label: 'Company Profile', path: '/about/profile' },
    { id: 22, label: 'Quality and Standards', path: '/about/quality-standard' },
  ], },
  { id: 3, label: 'FACILITY', path: '/facility' },
  { id: 4, label: 'SECTORS', path: '/sectors',
    sublinks: [
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
