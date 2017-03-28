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

// Function to delete an image. It needs to remove an image from the page.
function deleteImage() {

}

// Event listener on the Choose File button

// Event listener on the Add To Album button
addToAlbumInput.addEventListener('click', function () {
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
	$(".cardset").prepend("<div class='card'><h6>" + anImageCard.title + "</h6><img src='' alt=''><p>" + anImageCard.caption + "</p><div class='card-actions'><img class='card-action' src='images/delete.svg' alt='delete'><img class='card-action' src='images/favorite.svg' alt='favorite'></div></div>");
}

// TODO PHASE 3: Event listener to make sure the user has a valid text title and caption, and that they have selected an image file. If all those conditions don't exist, do not enable the Save button.
