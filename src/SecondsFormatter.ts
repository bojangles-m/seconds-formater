/* (c) Copyright Bojan Mazej, all rights reserved. */

import { ISecondsFormatter } from "./types";

export class SecondsFormatter implements ISecondsFormatter {
  private value: number = 0;
  private _defaultFormat: string = "HH:MM:SS";

  get defaultFormat() {
    return this._defaultFormat;
  }

  convert(value: number) {
    this.value = value;
    return this;
  }

  format(format?: string) {
    return `format: ${format ?? this.defaultFormat} of value ${this.value}`;
  }
}
