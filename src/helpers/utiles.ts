export const wait = (seconds: number = 0): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), seconds * 1000);
  });
};

export const getCurrentChapterStepperIndex = (): number => {
  const { pathname } = location;

  if (pathname.startsWith("/prologue")) {
    return 0;
  }

  if (pathname.startsWith("/chapter-1")) {
    return 1;
  }

  if (pathname.startsWith("/chapter-2")) {
    return 2;
  }

  if (pathname.startsWith("/chapter-3")) {
    return 3;
  }

  // pathname.startsWith("/epilogue")
  return 4;
};
