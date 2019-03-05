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
		
		initDrag();
	}

		//drag and drop functionality
	function initDrag() {
		piecesBoard.querySelectorAll('img').forEach(img => {
			img.addEventListener("dragstart", function(ev) {
				console.log('draggin....')

				ev.dataTransfer.setData("text/plain", this.id);
			});
		});
	}

	//Drag over and drop puzzle pieces
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(ev) {
			ev.preventDefault();
			console.log('dragged over');
		});

		zone.addEventListener("drop", function(ev) {
			ev.preventDefault();
			console.log('dropped over');

			let prevDrop = ev.target;
				while (prevDrop !== 0 && !prevDrop.classList.contains("drop-zone")) {
				prevDrop = prevDrop.parentNode;
			}

			if (prevDrop && prevDrop.childNodes.length > 0) {
				return false;
				ev.preventDefault();
			}

 			let pieces = ev.dataTransfer.getData("text/plain");
			ev.target.appendChild(document.querySelector(`#${pieces}`));
		});
	});


	function resetPuzzlePieces() {
		// change the current puzzle, regenerate the pieces
		piecesBoard.innerHTML ="";
		createPuzzlePieces(this.dataset.puzzleref);
		//debugger;
		 var images = document.getElementsByClassName("puzzle-image");
    			while(images.length > 4){
        		images[4].parentNode.removeChild(images[4]);
		}
	}

	puzzleSelectors.forEach(button=> button.addEventListener("click", resetPuzzlePieces));
	
})();
