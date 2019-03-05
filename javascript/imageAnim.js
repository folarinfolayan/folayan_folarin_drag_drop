(() => {
	console.log('fired');
	// set up the puzzle pieces and boards
	// need a reference to each piece that we want to create
	const thePieces = ["topleft", "topright", "bottomleft", "bottomright"];

	//get a reference to the drag side
	let piecesBoard = document.querySelector(".puzzle-pieces");
	let puzzleBoard = document.querySelector(".puzzle-board");

	//get a reference to the button at the bottom so we can change the puzzle
	let puzzleSelectors = document.querySelectorAll("#buttonHolder img");
	let dropZones = document.querySelectorAll('.drop-zone');


	//function go to the middle
	function createPuzzlePieces(pictureIndex) {
		//generate images here => need to make 4 ("topleft", "topright", "bottomleft", "bottomright")
		//debugger;
		//loop through the images reference and generate for each
		thePieces.forEach((piece, index)=>{
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image"
			src="images/${piece + pictureIndex}.jpg" alt="puzzle pieces">`;

			piecesBoard.innerHTML += newPuzzlePiece;
		})

			puzzleBoard.style.backgroundImage = `url(images/background${pictureIndex}.jpg)`;
		
	