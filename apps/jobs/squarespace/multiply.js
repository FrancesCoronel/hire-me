function multiply(foo, bar) {
    if (foo === 0 || bar === 0) {
        return 0;
    } else if (bar < 0) {
        return -foo + multiply(foo, bar + 1);
    } else {
        return foo + multiply(foo, bar - 1);
    }
}
