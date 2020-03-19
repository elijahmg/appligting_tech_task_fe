/**
 * Format number in following way
 * 1000000 -> 1 000 000
 * @param {string} x
 */
export function formatNumber(x: string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}