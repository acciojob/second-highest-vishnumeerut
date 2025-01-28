//your JS code here. If required.
function secondHighest(arr) {
			//Write your code here
			let secondLargest = -Infinity;
			let largest = -Infinity;
			for(let let  i = 0; i < arr.length; i++) {
				if(arr[i] > largest) {
					secondLargest = largest;
					largest = arr[i];
				}
			}
			return secondLargest;
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