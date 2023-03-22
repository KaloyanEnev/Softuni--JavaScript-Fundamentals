function demo(number) {
  for (let index = 1; index <= number; index++) {
    for (let j = 0; j < index; j++) {
      console.log(index);
    }
  }
}
demo(5);
