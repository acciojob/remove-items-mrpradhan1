//your JS code here. If required.
function remove() {
	colorSelect=document.getElementById("colorSelect");
	selectedColorIndex=colorSelect.SelectedIndex;
	if(selectedColorIndex !== -1)
		colorSelect.removeChild(colorSelect.options[selectedColorIndex]);
}

const removeButton=document.getElementsByTagName('input')[0];
removeButton = addEventListener('click', remove);