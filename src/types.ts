/* (c) Copyright Bojan Mazej, all rights reserved. */

export interface ISecondsFormatter {
  convert: (value: number) => this;
  format: (format?: string) => string;
}
