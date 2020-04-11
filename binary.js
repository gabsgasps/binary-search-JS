let array = [2, 5, 8, 10, 15, 18, 20, 22, 24, 26, 38, 50, 90, 101];

function case1() {
  const target = 15;
  const res = binarySearch(array, target);
  console.log('CASE 1', res === 4);
}

function case2() {
  const target = 30;
  const res = binarySearch(array, target);

  console.log('CASE 2', res === -1);
}

function binarySearch(array, target) {
  let lastPointer = array.length - 1;
  let initialPointer = 0;

  let middlePointer = Math.floor((initialPointer + lastPointer) / 2);
  while (array.length > middlePointer) {
    let middleElment = array[middlePointer];
    console.log('middle', middleElment);
    if (middleElment == target) {
      return middlePointer;
    }

    if (target < middleElment) {
      lastPointer = middlePointer - 1;
    }

    if (target > middleElment) {
      initialPointer = middlePointer + 1;
    }

    if (initialPointer > lastPointer) {
      return -1;
    }

    middlePointer = Math.floor((initialPointer + lastPointer) / 2);
  }
}

case1();
case2();