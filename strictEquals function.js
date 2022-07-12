const strictEquals = (a, b) => {
  if (Object.is(a, NaN) && Object.is(b, NaN)) {
    return false;
  } else if (!a && !b) {
    return true;
  }
  return Object.is(a, b);
};

strictEquals(true, false);
