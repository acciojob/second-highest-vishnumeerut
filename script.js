//your JS code here. If required.
function secondHighest(arr) {
		if(arr.length == 0 || arr.length == 1) return -Infinity;
		arr.sort((a, b) => b-a);
		return arr[1];
		}

		function Main() {
			var n = prompt("Enter the number of elements");
			var arr = [];
			for (var i = 0; i < n; i++) {
				arr[i] = prompt("Enter element " + (i+1));
			}
			alert(secondHighest(arr));
		}

Main()    