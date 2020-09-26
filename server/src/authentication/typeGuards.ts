export const isNonNullObject = (potentialObject: unknown): potentialObject is object =>
  typeof potentialObject === 'object' && potentialObject !== null;

const hasOwnProperty = <X extends {}, Y extends PropertyKey>(
  obj: X,
  prop: Y
): obj is X & Record<Y, unknown> => {
  // typescript does not support type guarding object properties yet
  // https://fettblog.eu/typescript-hasownproperty/
  // https://github.com/microsoft/TypeScript/issues/21732
  return obj.hasOwnProperty(prop);
};

export const hasStringProperty = <X extends {}, Y extends PropertyKey>(
  obj: X,
  prop: Y
): obj is X & Record<Y, string> => {
  if (!hasOwnProperty(obj, prop)) {
    return false;
  }
  return typeof obj[prop] === 'string';
};
