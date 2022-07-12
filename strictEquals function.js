const strictEquals = (a, b) => {
  if (Object.is(a, NaN) && Object.is(b, NaN)) {
    return false;
  } else if (!a && !b) {
    return false;
  }

  return Object.is(a, b);
};

strictEquals(-0, 0);
