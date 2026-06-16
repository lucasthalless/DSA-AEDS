// thinking about what design pattern would be of good use here..

function processStr(s: string): string {
    const operations = {
        "*": (str: string) => {
            return str.substring(0, str.length-1)
        },
        "#": (str: string) => {
            return str+str
        },
        "%": (str: string) => {
            return str.split("").reverse().join("")
        }
    }

    let result = "";

    for (let i = 0; i < s.length; i++) {
        if (operations[s[i]]) {
            result = operations[s[i]](result)
        } else {
            result += s[i]
        }
    }

    return result
};
