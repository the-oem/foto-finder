// Global colors
var defaultCardBackground = '#FFF';
var favoriteCardBackground = 'pink';

// Function to create an Image object. It has properties of Title and Caption.
function ImageCard(title, caption, imageName) {
	this.title = title;
	this.caption = caption;
	this.imageName = imageName;
	this.favorite = function () {

		// This is the method for toggling favorite status.
	}
	console.log(this);
}

// Event listener on the Add To Album button
$(".save").on("click", function () {
	var tempTitle = $('.title').val();
	var tempCaption = $('.caption').val();
	var tempFileName = getFilename($('.choose-file').val());
	console.log('Title: ' + tempTitle + '\nCaption: ' + tempCaption + '\nFile Path: ' + tempFileName);

	var imageCard = new ImageCard(tempTitle, tempCaption, tempFileName);
	addToAlbum(imageCard);
})

// Function to split a filepath on \ and return just the filename.
function getFilename(pathToImage) {
	return pathToImage.split('\\').pop();
}

// Function to add an image to the album (page)
function addToAlbum(anImageCard) {
	$(".cardset").prepend("<div class='card'><h6>" + anImageCard.title + "</h6><img src='photos/" + anImageCard.imageName + "' alt='' width='250px'><p>" + anImageCard.caption + "</p><div class='card-actions'><img id='delete-image' class='card-action' src='images/delete.svg' alt='delete'><img id='favorite-image' class='card-action' src='images/favorite.svg' alt='favorite'></div></div>");
}

// Attach a delegated event handler to the parent container of the image cards
$(".cardset").on("click", "#delete-image", function (event) {
	console.log($(this));
	$(this).closest(".card").remove();
});

// TODO PHASE 3: Event listener to make sure the user has a valid text title and caption, and that they have selected an image file. If all those conditions don't exist, do not enable the Save button.
