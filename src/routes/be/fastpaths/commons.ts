export type T = [string, string];

export function binary_search(arr: T[], c: T[0]): string | null {
  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    let m = Math.floor((i + j) / 2);
    let v = arr[m] as T;

    if (v[0] === c) {
      return v[1];
    }

    if (c > v[0]) {
      i = m + 1;
    } else {
      j = m - 1;
    }
  }

  return null;
}

export function contains(arr: T[], c: T[0]): boolean {
  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    let m = Math.floor((i + j) / 2);
    let v = arr[m] as T;

    if (v[0] === c) {
      return true;
    }

    if (c > v[0]) {
      i = m + 1;
    } else {
      j = m - 1;
    }
  }

  return false;
}
