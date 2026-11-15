export function pageOf(items, page = 1, size = 20) {
  const start = page * size;
  return items.slice(start, start + size);
}
