export function getDifferenceYears(year) {
  return new Date().getFullYear() - year;
}

export function calculateByBrand(brand) {
  let increase;

  switch (brand) {
    case 'americano':
      increase = 1.15;
      break;
    case 'europeo':
      increase = 1.3;
      break;
    case 'asiatico':
      increase = 1.05;
      break;
    default:
      break;
  }

  return increase;
}

export function calculateByPlan(plan) {
  return plan === 'basico' ? 1.2 : 1.5;
}

export function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
