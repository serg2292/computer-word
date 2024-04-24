function createWord(number) {

    function getComputerWord(count) {
        if (count === 1 || (count % 10 === 1 && count % 100 !== 11)) {
            return "компьютер";
        } else if ((count >= 2 && count <= 4) || (count % 10 >= 2 && count % 10 <= 4 && count % 100 !== 12 && count % 100 !== 13 && count % 100 !== 14)) {
            return "компьютера";
        } else {
            return "компьютеров";
        }
    }

    return `${number} ${getComputerWord(number)}`;
}
const data = Array.from({ length: 36 }, (_, index) => index);
const res = data.map(item => createWord(item))

console.log(res)