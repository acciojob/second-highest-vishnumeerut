//your JS code here. If required.
function secondHighest(arr) {
			//Write your code here
			arr.sort((a, b) => b-a);
			console.log(arr[1]);
			return arr[1]
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