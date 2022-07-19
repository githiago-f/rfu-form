export const dateFormat = (date?: Date) => {
  return new Intl.DateTimeFormat(
    navigator.language,
    {
      month: '2-digit',
      day: '2-digit',
      year: '2-digit',
    },
  ).format(date);
};
