export class MyClass {
  /**
   * @internal
   */
  _b: string = "b";
  constructor(public a: number) {}

  /**
   * @internal
   */
  internalFunc() {
    console.log(this._b);
  }

  /**
   * Overload function (with flag)
   *
   * @internal
   */
  olfunc(val: number, flag: boolean): string;
  /**
   * Overload function (number)
   *
   * @internal
   */
  olfunc(val: number): number;
  /**
   * Overload function (string)
   *
   * This is not `@internal`!
   * So not all of `olfunc` sigantures are `@internal`, therefore it's not filtered by the `@internal` filter.
   *
   */
  olfunc(val: string): string;
  olfunc(val: number | string, flag?: boolean) {
    if (flag !== undefined) {
      if (flag) {
        return `true ${val}`;
      } else {
        return `false ${val}`;
      }
    }

    if (typeof val === "number") {
      return val + 2;
    } else {
      return `${val} + 2 ${this._b}`;
    }
  }

  olfunc2(val: number): number;
  olfunc2(val: string): string;
  /**
   * Overload function 2
   *
   * Comment of implementation is copied to all signatures by typedoc.
   * So all of `olfunc2` signatures are `@internal`, therefore it's filtered by  the `@internal` filter.
   *
   * @internal
   */
  olfunc2(val: number | string) {
    return val;
  }
}
