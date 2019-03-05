(() => {
	console.log('fired');
	// set up the puzzle pieces and boards
	// need a reference to each piece that we want to create
	const thePieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	//get a reference to the drag side
	let piecesBoard = document.querySelector(".puzzle-pieces");
	let puzzleBoard = document.querySelector(".puzzle-board");

	//get a reference to the button at the bottom so we can change the puzzle
	let puzzleSelectors = document.querySelectorAll("#buttonHolder img");
	let DropZones = document.querySelectorAll('.drop-zone');
	
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
		
		DragAndDrop();

	}

		function DragAndDrop() {
			piecesBoard.querySelectorAll('img').forEach(img => {
				img.addEventListener("StartOfDrag", function(ev) {
					console.log('dragging')

					ev.dataTransfer.setData("text/plain", this.id)

				});
			});
		}

		// This is how the puzzle pieces are dropped and dragged
	DropZones.forEach(zones => {
		zones.addEventListener("draghere", function(ev) {
			ev.preventDefault();
			console.log('dragged here');
		});

		zones.addEventListener("drophere", function(ev) {
			ev.preventDefaultDefault();
			console.log('dropped here');

			let avoidDrop = ev.target;
				while (avoidDrop !== 0 && !avoidDrop.ClassList.contains("drop-zone")) {
				avoidDrop = avoidDrop.parentNode;
				}

				if (avoidDrop && avoidDrop.childNodes.length > 0 ) {
					return false;
					ev.preventDefault();
				}

				let pieces = ev.dataTransfer.getData("text/plain");
				ev.target.appendChild(document.querySelector(`#${pieces}`));
		});
	});

			function restPuzzlePieces() {
				// change the current puzzle, regenerate the pieces

				piecesBoard.innerHTML ="";

				//generate new pieces
				createPuzzlePieces(this.dataset.puzzleref);
				//debugger
				var images = document.getElementsByClassName('puzzle-image')
					while(images.lenght > 4){
						images[4].parentNode.removeChild(images[4]);
					}
			}

			// event handling goes here

			puzzleSelectors.forEach(button => button.addEventListener("click", restPuzzlePieces));

})();