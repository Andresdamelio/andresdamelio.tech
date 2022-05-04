export const sortByDate = (arr: any[]) => {
  return [...arr].sort(
    (a, b) => new Date(b.from).getTime() - new Date(a.from).getTime()
  );
};
