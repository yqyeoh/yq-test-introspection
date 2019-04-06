const category = [
  { name: "Diversity and Inclusion", sector: [0, 45] },
  { name: "Religious Minorities", sector: [45, 90] },
  { name: "Society and Privilege", sector: [90, 135] },
  { name: "Climate Injustice", sector: [135, 180] },
  { name: "Equitable Tech", sector: [180, 225] },
  { name: "Sexual Orientation and Gender Identity", sector: [225, 270] },
  { name: "Racial Minorities", sector: [270, 315] },
  { name: "Economic Justice", sector: [315, 360] }
];

const data = [
  {
    name: "John Doe",
    categories: [
      { category: category[0], level: 1, action: 4 },
      { category: category[1], level: 3, action: 4 },
      { category: category[2], level: 2, action: 4 },
      { category: category[3], level: 2, action: 4 },
      { category: category[4], level: 1, action: 4 },
      { category: category[5], level: 2, action: 4 },
      { category: category[6], level: 3, action: 4 },
      { category: category[7], level: 2, action: 4 }
    ]
  }
];

export default data;
