/*
 * Complete the function below.
 */
function braces(str) {
    var braces = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] == '(' || str[i] == '[' || str[i] == '{')
            braces.push(str[i]);
        else if (str[i] == ')' || str[i] == ']' || str[i] == '}') {
            if (braces.length === 0)
                return false;
            if (str[i] == ')') {
                if (braces[braces.length - 1] != '(')
                    return false;
                braces.pop();
                continue;
            } else if (str[i].charCodeAt(0) - 2 != braces[braces.length - 1].charCodeAt(0))
                return false;
            braces.pop();
        }
    }
    if (braces.length > 0)
        return false;
    return true;
}
