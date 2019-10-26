export class Functions {

  public static pushAndSort<T>(list: T[], element: T, compareFn: (a: T, b: T) => number): void {
    list.push(element);
    if (compareFn) {
      list.sort(compareFn);
    }
  }
}
