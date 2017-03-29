// Global colors
var defaultCardBackground = '#FFF';
var $favoriteCardBackground = 'pink';

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
	var $imageTitle = anImageCard.title;
	var $imageCaption = anImageCard.caption;
	var $imageName = anImageCard.imageName;
	$(".cardset").prepend(`<div class="card"><h6>${$imageTitle}</h6><img src="photos/${$imageName}" alt=""><p>${$imageCaption}</p><div class="card-actions"><button type="button" name="button" class="delete-inactive" id="delete-image" /><button type="button" name="button" class="favorite-inactive" id="favorite-image" /></div></div>`);
}

// Attach a delegated event handler to the parent container of the image cards to handle when a user clicks delete
$(".cardset").on("click", "#delete-image", function (event) {
	console.log($(this));
	$(this).closest(".card").remove();
});

// Attach a delegated event handler to the parent container of the image cards to handle when a user clicks favorite
$(".cardset").on("click", "#favorite-image", function () {
	$(this).parent().parent().css("background-color", $favoriteCardBackground);
	$(this).toggleClass('favorite-active');
});

// TODO PHASE 3: Event listener to make sure the user has a valid text title and caption, and that they have selected an image file. If all those conditions don't exist, do not enable the Save button.
