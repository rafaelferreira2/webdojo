export function getTodayDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
  const year = today.getFullYear();

  return `${day}/${month}/${year}`;
}
