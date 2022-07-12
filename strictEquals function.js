const strictEquals = (a, b) => {
  if (Object.is(a, NaN) && Object.is(b, NaN)) {
    return false;
  }
  return Object.is(a, b);
};

strictEquals(NaN, NaN);
