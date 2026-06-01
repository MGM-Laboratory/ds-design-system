import { describe, expect, it } from 'vitest';
import { formatBytes } from './format-number.js';
import { initials, slugify, truncate, capitalize, pluralize } from './format-string.js';

describe('formatBytes', () => {
  it('formats zero', () => expect(formatBytes(0)).toBe('0 B'));
  it('formats kilobytes', () => expect(formatBytes(1024)).toBe('1.0 KB'));
  it('formats megabytes', () => expect(formatBytes(5_242_880)).toBe('5.0 MB'));
  it('clamps absurdly small to 0 B', () => expect(formatBytes(-1)).toBe('0 B'));
});

describe('initials', () => {
  it('returns first letters of two words', () => expect(initials('Jane Doe')).toBe('JD'));
  it('limits length', () => expect(initials('Jane Mary Doe', 2)).toBe('JM'));
  it('handles empty', () => expect(initials('')).toBe(''));
});

describe('slugify', () => {
  it('lowercases and dashes', () => expect(slugify('Hello World')).toBe('hello-world'));
  it('strips punctuation', () => expect(slugify("It's a test!")).toBe('its-a-test'));
});

describe('truncate', () => {
  it('returns string under max unchanged', () => expect(truncate('hi', 10)).toBe('hi'));
  it('truncates and adds ellipsis', () => expect(truncate('hello world', 5)).toBe('hell…'));
});

describe('capitalize', () => {
  it('capitalizes first letter', () => expect(capitalize('foo')).toBe('Foo'));
  it('handles empty', () => expect(capitalize('')).toBe(''));
});

describe('pluralize', () => {
  it('uses singular for 1', () => expect(pluralize(1, 'item')).toBe('item'));
  it('appends s by default', () => expect(pluralize(2, 'item')).toBe('items'));
  it('uses explicit plural', () => expect(pluralize(2, 'mouse', 'mice')).toBe('mice'));
});
