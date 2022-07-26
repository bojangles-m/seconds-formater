/* (c) Copyright Bojan Mazej, all rights reserved. */

export const isNumberInSeconds = (value: number) => /^-?[1-9][0-9]*$/.test(value.toString());
