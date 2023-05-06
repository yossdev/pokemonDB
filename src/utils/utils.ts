export function uppercaseFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function classNames(str: string | undefined) {
  return str ? " " + str : "";
}
