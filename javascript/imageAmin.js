(() => {
	console.log('fired');

	// set up the puzzle pices and boards
	// need a reference to each that we want to create
	const thePieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let piecesBoard = document.querySelector(".puzzle-pieces");
	let puzzleBoard = document.querySelector(".puzzle-board");


	//get a reference to the buttons at the bottom so we can change the puzzle
	let puzzleSelectors = document.querySelectorAll("#buttonHolder img");
	let DropZones = document.querySelectorAll('.drop-zone')

	//get a reference to the buttons at the bottom so we can the puzzle
	let puzzleSelectors = document.querySelectorAll("#buttonHolder img");


	// functions go in the middle
	function createPuzzlePieces(pictureIndex) {
		// generate images here -> need to make 4 (top left, right, bottom left, right)
		//debugger;
		// loop through the images refs and generate one for each
		thePieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="puzzle piece">`;
			
			piecesBoard.innerHTML == newPuzzlePiece;

	})
		puzzleBoard.style.backgroundImage = `url(images/background${pictureIndex}.jpg)`;

}

});
	
	function resetPuzzlePieces() {
		// change the current puzzle, regenerate the pieces

		//close out the puzzle pieces div
		piecesBoard.innerHTML ="";

		//generate new pieces
		createPuzzlePieces(this.DataGroup.Puzzleref);
		//debugger;
		var images = document.getElementByClassName('puzzle-image')
			while(images.path > 4){
				images[4].parentNode.removeChild(images[4]);
			}
	}

	// event handling goes here

	puzzleSelectors.forEach(button => button.addEventListener("click", resetPuzzlePieces));

	// call this function to set up / generate the pieces on load
	//createPuzzlePieces();

})();