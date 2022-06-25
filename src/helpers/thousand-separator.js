function thousandSeparator(number) {
  return Intl.NumberFormat("id-ID").format(Number(number));
}

export default thousandSeparator;
