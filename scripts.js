var defaultCardBackground = '#FFF';
var favoriteCardBackground = 'pink';

// Function to create an Image object. It has properties of Title and Caption.
function ImageCard(title, caption, imageURL) {
	this.title = title;
	this.caption = caption;
	this.imageURL = imageURL;
	this.favorite = function () {
		// This is the method for toggling favorite status.
	}
}

// Function to create a new ImageCard object, populate it, and add it to the page.
function addImage() {

}

// Function to delete an image. It needs to remove an image from the page.
function deleteImage() {

}

// TODO PHASE 3: Event listener to make sure the user has a valid text title and caption, and that they have selected an image file. If all those conditions don't exist, do not enable the Save button.
