**FirstMark Elite**

I don't know if this would necessarily be deemed technical but I did help create a map of all the coding bootcamps out there because I didn't see any existing solution in place. It's gotten over 16K hits on Google Maps alone but I recently created a crowd-sourced version as well. Either way, both of these are the two top results on Google for the search query "map of coding bootcamps".

Simple anagram solver. I was using JavaScript to write it and came across a solution that just used a bunch of built-in functions. I'm really into one-liners for simple algorithm problems because I appreciate the efficiency that goes into it. With the parameters of the two strings, we can check if they're anagrams by splitting the strings into characters, sorting those characters, and then joining them together, thereby creating an entire array of words formed by the mixing of characters in the given string. We compare these two arrays of words to each other for each string given, and bam - we know if they're anagrams of each other! I wrote this anagram solver for an interview challenge problem.

// using built in JS methods to determine strings are anagrams of each other
var checkAnagram = function(str1, str2)
return str1.split("").sort().join("") === str2.split("").sort().join("");
};

