export const limitText = (text, length) => (text ? text.substring(0, length) + (text.length > length ? ' ...' : '') : '');

export const formatCurrency = (amount) => {
  if (amount != null) {
    const formattedAmount = amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    return formattedAmount.replace('₫', 'VNĐ');
  }
  return 'N/A';
};
