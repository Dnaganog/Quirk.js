const log = console.log

const largeInts = () => {
  log(999999999999999 === 1000000000000000)
}
// largeInts();

const NaNs = () => {
  log('2A:', typeof NaN === 'number')
  log('2B:', NaN == NaN)
  log('2C:', NaN != NaN)
}
// NaNs();

const sqBracketsQuotes = () => {
  log('3A', [1,6] == '1,6')
  log('3B', [16] == '[16]')
  log('3C', [[1,2],[3,4]] == '"1,2","3,4"')
  log('3D', [1,[2,[3,[4,[5]]]]] == '1,2,3,4,5')  
}
// sqBracketsQuotes()

const valueOfMethod = () => {
  log(false == {valueOf: () => '0'})
}
// valueOfMethod()

const voidIIFE = () => {
  var a = {};
  for (var i = 0; i < 3; i++) {
    void function(j) {
      a[j] = function() {
          return j;
      }
    }(i)
  }
  log(a[0]())
  log(a[1]())
  log(a[2]())
}
// voidIIFE()

const whitespace = () => {
  log('6A', Number('\n') == Number('\r'))
  log('6B', Number('\r') == Number('\t'))
  log('6C', Number('\t') == Number('\v'))
  log('6D', Number('\v') == 0)
}
// whitespace()

const mathMaxVsMin = () => {
  log('7A', Math.max() > Math.min())
  log('7A', Math.max() === Math.min())
  log('7A', Math.max() < Math.min())
}
// mathMaxVsMin()

const trueMath = () => {
  log('8A', true + true === 2)
  log('8B', true === 1)
  log('8C', false + true * '2' === 2)
}
// trueMath()

const arrYouSure = () => {
  var arr = [0];
  log((arr == arr) && (arr == !arr))
}
// arrYouSure()

const objectsNArrays = () => {
  log('A:', {} + []);
  log('B:', [] + {});
  log('C:', ({} + []));
  log('D:', [] + []);
  log('E:', ![] + []);
  log('F:', {} + {});
}
// objectsNArrays()