function krakenCount(m, n) {

    if (m == 0 && n == 0) {
        return 0;
    }

    var board = [m][n];

    for (i = 0; i < m; i++) {
        board[i][0] = 1;
    }

    for (i = 0; i < n; i++) {
        board[0][i] = 1;
    }

    for (i = 1; i < m; i++) {
        for (j = 1; j < n; j++) {
            board[i][j] = board[i - 1][j] + board[i][j - 1] + board[i - 1][j - 1];
        }
    }

    return board[m - 1][n - 1];
}
