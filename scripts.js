// Event listener on the Add To Album button. This creates a new ImageCard object and passes it off to be added to the album.
$(".save").on("click", function () {
	var $imageTitle = $('.title').val();
	var $imageCaption = $('.caption').val();
	var $imageFilename = getFilename($('.choose-file').val());
	var imageCard = new ImageCard($imageTitle, $imageCaption, $imageFilename);
	addToAlbum(imageCard);
})

// Attach a delegated event handler to the parent container of the image cards to handle when a user clicks delete.
$(".cardset").on("click", "#delete-image", function () {
	$(this).closest(".card").remove();
	toggleZeroState();
});

// Attach a delegated event handler to the parent container of the image cards to handle when a user clicks favorite.
$(".cardset").on("click", "#favorite-image", function () {
	$(this).parent().parent().toggleClass('card-favorite');
	$(this).toggleClass('favorite-active');
});

// Event listeners on the input container that allow for checking of valid inputs before enabling the Add to Album button.
$('.user-input').on('input', '#title', readyToSubmit);
$('.user-input').on('input', '#caption', readyToSubmit);
$('.user-input').on('change', '#file', readyToSubmit);

// Function to create an Image object. It has properties of Title and Caption.
function ImageCard(title, caption, imageName) {
	this.title = title;
	this.caption = caption;
	this.imageName = imageName;
	console.log(this);
}

// Function to split a filepath on \ and return just the filename.
function getFilename(pathToImage) {
	return pathToImage.split('\\').pop();
}

// Function to add an image to the album (page).
function addToAlbum(anImageCard) {
	var $imageTitle = anImageCard.title;
	var $imageCaption = anImageCard.caption;
	var $imageName = anImageCard.imageName;
	$(".cardset").prepend(`<div class="card"><h5 class="card-title">${$imageTitle}</h5><img src="photos/${$imageName}" alt="" class="card-image"><p class="card-caption">${$imageCaption}</p><div class="card-actions"><button type="button" name="button" class="delete-inactive" id="delete-image" /><button type="button" name="button" class="favorite-inactive" id="favorite-image" /></div></div>`);
	resetForm();
}

// Function to reset the input fields after a successful image card addition.
function resetForm() {
	$('#title').val('');
	$('#caption').val('');
	$('#file').val('');
	toggleDisabled(true);
	toggleZeroState();
}

// Function to check that the input fields all have data before enabling the Add to Album button.
function readyToSubmit() {
	var $title = $('#title').val();
	var $caption = $('#caption').val();
	var $filename = $('#file').val();
	if ($title !== '' && $caption !== '' && $filename !== '') {
		toggleDisabled(false);
	} else {
		toggleDisabled(true);
	}
}

// Function to toggle the disabled flag on the Add to Album button. jQuery, you really should make this easier...le sigh.
function toggleDisabled(value) {
	$('.save').prop('disabled', value);
}

// Function to toggle the zero state between hidden and visible. If the image card count is 0, toggle to visible, otherwise toggle to hidden.
function toggleZeroState() {
	if ($('.cardset').find($('.card')).length === 0) {
		$('.zero-state').toggle(true);
	} else {
		$('.zero-state').toggle(false);
	}
}
