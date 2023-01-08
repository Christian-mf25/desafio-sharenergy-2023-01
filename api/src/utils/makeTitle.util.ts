const makeTitle = (title: string): string | void => {
  const splitName = title.split(" ");

  if (splitName[splitName.length - 1] === "") {
    splitName.pop();
  }

  const newTitle = splitName.map((item) => {
    const lower = item.toLowerCase();
    const upper = lower[0].toLocaleUpperCase();
    const capitalize = lower.replace(lower[0], upper);
    return capitalize;
  });
  return newTitle.join(" ");
};

export default makeTitle;
