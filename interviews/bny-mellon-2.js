// parameter is an array with numbers
// n = number of elements in a

function maxDifference(a) {
	// hold all differences in empty array
	var diffs = [];
	// define array iterators
	var i = 1, j = 0;
	// number of elements in array
	var n = a.length;
	// loop through array
	for(i; i < n; i++){
		for(j; j < i; j++){
			// compare two elements of array next to each other
			// if element is bigger than other
			if(a[i] > a[j]){
				// push differences found to empty array
				diffs.push(a[i]-a[j]);
			}
//			else {
//				// fulfill constrain
//				return -1;
//			}
		}
	}
	// return max number of all differences found
	return Math.max.apply(Math, diffs);
}


console.log(maxDifference([7, 9, 5, 6, 3, 2]));
// should return 2