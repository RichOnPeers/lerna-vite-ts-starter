/**
 * @param value
 * @returns Boolean True for empty false for none empty.
 * Checks if a value is empty.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isEmpty(value: any): boolean {
  if (Array.isArray(value)) {
    return value.length === 0;
  } else if (typeof value === 'object') {
    if (value) {
      for (const _ in value) {
        return false;
      }
    }
    return true;
  } else {
    return !value;
  }
}
