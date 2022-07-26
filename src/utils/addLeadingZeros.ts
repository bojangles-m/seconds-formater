/* (c) Copyright Bojan Mazej, all rights reserved. */

export const addLeadingZeros = (value: number, totalLength: number) => String(value).padStart(totalLength, '0');
