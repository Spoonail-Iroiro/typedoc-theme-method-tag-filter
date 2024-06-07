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
}
