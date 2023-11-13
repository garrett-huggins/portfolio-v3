const getUniqueTags = (items) => {
  const tags: string[] = items
    .flatMap((item) => item.tags)
    .filter(
      (value: string, index: number, self: string[]) =>
        self.indexOf(value) === index,
    )
    .sort((tagA: string, tagB: string) => tagA.localeCompare(tagB));
  return tags;
};

export default getUniqueTags;
