import { setObjectFromRef, getValue, clearProps, addRowToPageList } from '../src/utils/form-utils';

describe('testing the getValue API', () => {
  test('it should return the correct obj for key1.key2.key3', () => {
    const input = { key1: { key2: { key3: 'test' } } };
    expect(getValue(input, 'key1.key2.key3')).toEqual('test');
  });
  test('it should return null for invalid input', () => {
    expect(getValue({}, 'key1')).toBeNull();
  });
  test('it should return null for invalid input', () => {
    expect(getValue({}, {})).toBeNull();
  });
  test('it should return null for incorrect match', () => {
    expect(getValue({ test: [{ key1: 'test' }] }, 'key1')).toBeNull();
  });
  test('it should return null for incorrect match', () => {
    expect(getValue({ test: { key1: 'test' } }, 'test(1).foo')).toBeNull();
  });
});

describe('testing the setObjectFromRef API', () => {
  test('it should populate the correct object', () => {
    const input = {};
    setObjectFromRef(input, 'props(3).key1', 'foo2');
    setObjectFromRef(input, 'props(1).key1', 'foo');
    setObjectFromRef(input, 'props(2).key1', 'foo1');
    setObjectFromRef(input, 'props(3).key2', 'foo3');
    const output = {
      props: [{ key1: 'foo' }, { key1: 'foo1' }, { key1: 'foo2', key2: 'foo3' }],
    };
    expect(input).toEqual(output);
  });
  test('it should be in sync with getValue', () => {
    const input = {};
    const path = 'props(3).types(5).test.foo(3).tt';
    setObjectFromRef(input, path, 'foo2');
    expect(getValue(input, path)).toEqual('foo2');
  });
});

describe('testing the clearProps API', () => {
  test('it should clear the values', () => {
    const input = { key1: { key2: { key3: 'test' }, key4: 'eee' }, key5: 'ddd' };
    const output = { key1: { key2: { key3: '' }, key4: '' }, key5: '' };
    clearProps(input);
    expect(input).toEqual(output);
  });
});

describe('testing the addRowToPageList API', () => {
  test('it should add a row to the page with empty values', () => {
    const input = { key1: { key2: [{ key3: 'test' }, { key4: 'eee' }] }, key5: 'ddd' };
    const output = { key1: { key2: [{ key3: 'test' }, { key4: 'eee' }, { key3: '' }] }, key5: 'ddd' };
    addRowToPageList(input, 'key1.key2');
    expect(input).toEqual(output);
  });
});
