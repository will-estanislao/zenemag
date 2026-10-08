export function trimPath(currentPath: string) {
  const word = /\/(\w+)/gi;
  const arrayPath = currentPath.toUpperCase().match(word);
  const pathname = arrayPath?.at(0)?.split("/");
  return pathname;
}

export function formatDate(dateString: string) {
  const date = "";
}
