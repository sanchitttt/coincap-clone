class Formatter {
    private repeatNTimes(value: string, times: number): string {
        let str = '1';
        for (let i = 0; i < times; i++) {
            str += value;
        }
        return str;
    }
    formatChange(value: string): string {
        return (+value).toFixed(2);
    }
    formatUnit(value: string): string {
        if (!value) return '-';
        const leftSignificantLength = value.split('.')[0]?.length;
        let unit;
        let divisor;
        switch (leftSignificantLength) {
            case 4:
                unit = 'k'
                divisor = this.repeatNTimes('0', 4);
                break;
            case 5:
                unit = 'k';
                divisor = this.repeatNTimes('0', 4);
                break;
            case 6:
                unit = 'k'
                divisor = this.repeatNTimes('0', 4);
                break;
            case 7:
                console.log(7)
                unit = 'm'
                divisor = this.repeatNTimes('0', 6);
                break;
            case 8:
                console.log(8)
                unit = 'm';
                divisor = this.repeatNTimes('0', 6);
                console.log(divisor)
                break;
            case 9:
                unit = 'm';
                divisor = this.repeatNTimes('0', 6);
                break;
            case 10:
                unit = 'b';
                divisor = this.repeatNTimes('0', 9);
                break;
            case 11:
                unit = 'b'
                divisor = this.repeatNTimes('0', 9);
                break;
            case 12:
                unit = 'b'
                divisor = this.repeatNTimes('0', 9);
                break;
            default:
                unit = 't'
                divisor = this.repeatNTimes('0', 9);
        }

        return (+value / +divisor).toPrecision(4) + unit;


    }
    formatCurrency(value: string): string {
        if (value) {
            const parsedFloatValue = parseFloat(value);
            if (parsedFloatValue < 1) {
                return '$' + parseFloat('.' + value.split('.')[1]).toFixed(2)
            }
            const splittedValue = value.split('.');
            const leftValue = splittedValue[0];
            const rightValue = '.' + splittedValue[1];
            const leftSplittedValue = leftValue.split('');
            if (leftValue.length === 4) {
                leftSplittedValue.splice(1, 0, ',');
            }
            else if (leftValue.length === 5) {
                leftSplittedValue.splice(2, 0, ',');
            }
            else if (leftValue.length === 6) {
                leftSplittedValue.splice(3, 0, ',');
            }

            return '$' + leftSplittedValue.join('') + parseFloat(rightValue).toFixed(2)
        }
        return value;
    }
}

export default Formatter;