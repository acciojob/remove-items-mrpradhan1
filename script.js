//your JS code here. If required.
// Function to remove the selected color from the dropdown list
			function remove() {
				const colorSelect = document.getElementById("colorSelect");
				const selectedColorIndex = colorSelect.selectedIndex;

				if (selectedColorIndex !== -1) {
					colorSelect.removeChild(colorSelect.options[selectedColorIndex]);
				}
			}

			// Add click event listener to the button
			const removeButton = document.getElementsByTagName('input')[0];
			removeButton.addEventListener('click', remove);