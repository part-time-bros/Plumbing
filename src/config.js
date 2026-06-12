export const business = {
  name:      'ProTrade Services',
  short:     'ProTrade',
  tagline:   'Licensed · Bonded · Insured',
  phone:     '(555) 400-7890',
  email:     'hello@protradeservices.com',
  address:   '1204 Industrial Blvd',
  city:      'Springfield, ST 00000',
  founded:   2004,
  license:   'LIC #SP-88214',
  emergency: true,
};

export const services = [
  {
    id:       'plumbing',
    name:     'Plumbing',
    short:    'Leaks, drains, remodels',
    desc:     'From a dripping faucet to a full bathroom remodel — we diagnose fast and fix it right the first time. No upselling, no callbacks.',
    featured: true,
    items: [
      'Leak detection & repair',
      'Drain cleaning & snaking',
      'Pipe replacement',
      'Water heater installation',
      'Bathroom & kitchen remodels',
      'Sewer line inspection',
    ],
  },
  {
    id:       'roofing',
    name:     'Roofing',
    short:    'Repairs, replacements, inspections',
    desc:     'Shingle, metal, or flat — we handle it all. Storm damage assessments within 24 hours. Written estimates before any work starts.',
    featured: false,
    items: [
      'Full roof replacement',
      'Shingle & tile repair',
      'Flat roof systems',
      'Storm damage assessment',
      'Gutter installation',
      'Ventilation & insulation',
    ],
  },
  {
    id:       'hvac',
    name:     'HVAC',
    short:    'Heat, cool, clean air',
    desc:     'Year-round climate control for your home. Emergency repairs 24/7. Maintenance plans that extend system life by years.',
    featured: false,
    items: [
      'AC installation & repair',
      'Furnace & boiler service',
      'Heat pump systems',
      'Duct cleaning & sealing',
      'Smart thermostat install',
      'Seasonal maintenance plans',
    ],
  },
  {
    id:       'electrical',
    name:     'Electrical',
    short:    'Safe, code-compliant wiring',
    desc:     'Panel upgrades, new circuits, lighting, EV chargers — every job completed by a fully licensed electrician to code.',
    featured: false,
    items: [
      'Panel upgrades & replacements',
      'Outlet & switch installation',
      'Lighting design & fixtures',
      'EV charger installation',
      'Whole-home rewiring',
      'Safety inspections',
    ],
  },
];

export const stats = [
  { value: '20+',    label: 'Years in Business' },
  { value: '4,800+', label: 'Jobs Completed' },
  { value: '600+',   label: '5-Star Reviews' },
  { value: '<1hr',   label: 'Emergency Response' },
];

export const testimonials = [
  {
    quote: 'Called at 11pm for a burst pipe. Technician was here in 40 minutes and had it fixed before midnight. These are the guys you want.',
    name:  'Sarah K.',
    city:  'Springfield',
    service: 'Plumbing',
  },
  {
    quote: 'Complete roof replacement done in two days, start to finish. Clean site, fair price, zero pressure tactics. Hired them again for HVAC.',
    name:  'Mike T.',
    city:  'Riverside',
    service: 'Roofing',
  },
  {
    quote: 'Third time using ProTrade across three different jobs. They always show up on time, price what they quoted, and never leave a mess.',
    name:  'James L.',
    city:  'Westfield',
    service: 'Electrical',
  },
];

export const hours = [
  ['Mon – Fri', '7:00am – 6:00pm'],
  ['Saturday',  '8:00am – 4:00pm'],
  ['Sunday',    'Emergency calls only'],
];

export const values = [
  {
    title: 'No Surprises',
    desc:  'You get a written price before we start. What we quote is what you pay — no extras, no surprises at the end.',
  },
  {
    title: 'On Time, Every Time',
    desc:  'We respect your schedule. If we say 9am, we are there at 9am. We call ahead if anything changes.',
  },
  {
    title: 'First-Time Fix',
    desc:  'We carry the parts, have the training, and take the time to do it right. Callbacks are bad for both of us.',
  },
  {
    title: 'We Stand Behind It',
    desc:  'Every job carries a written guarantee. If something is not right, we come back and fix it. No arguments.',
  },
];
