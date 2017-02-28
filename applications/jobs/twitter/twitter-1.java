public class twitter {
    static int findMutationDistance(String start, String end, String[] bank) {
        if (start == null || end == null)
            return -1;
        if (start.equals(end))
            return 0;
        char[] genes = new char[] {
            'A',
            'C',
            'T',
            'G'
        };
        Queue<String> queue = new LinkedList<>();
        Set<String> set = new HashSet<>();
        Set<String> bankSet = new HashSet<>();
        queue.offer(start);
        queue.offer("");
        set.add(start);
        Collections.addAll(bankSet, bank);
        int distance = 0;
        while (!queue.isEmpty()) {
            String current = queue.poll();
            if (current.equals(end)) {
                return distance;
            } else if (current.isEmpty()) {
                if (queue.isEmpty()) {
                    break;
                } else {
                    queue.offer("");
                    distance++;
                }
            } else {
                for (int i = 0; i < current.length(); i++) {
                    char[] chars = current.toCharArray();
                    for (char gene : genes) {
                        if (chars[i] != gene) {
                            chars[i] = gene;
                            String next = String.valueOf(chars);
                            if (!set.contains(next) && bankSet.contains(next)) {
                                queue.offer(next);
                                set.add(next);
                            }
                        }
                    }
                }
            }
        }
        return -1;
    }
}