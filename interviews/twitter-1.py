from queue import *
from collections import deque

def findMutationDistance(start, end, bank):
    if ((start is None) or (end is None)):
        return -1
    if (start == end):
        return 0
    genes = [ 'A', 'C', 'T', 'G' ];
    q = Queue()
    s = []
    bankset = []
    q.put(start)
    q.put("")
    s.append(start)
    bankset.append(bank)
    distance = 0
    while not q.empty():
        current = q.get()
        if (current == end):
            return distance
        elif (current == ''):
            if (q.empty()):
                break
            else:
                q.put("")
                distance+=1
        else:
            for i in current:
                for gene in genes:
                    if (i != gene):
                        i = gene
                        next = current
                        if ((next not in s) and (next in bankset)):
                            q.put(next)
                            s.append(next)
    return -1