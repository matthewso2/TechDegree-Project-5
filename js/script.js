(function(){
    var $imgs = $('#gallery img');
    var $search = $('#filter-search');
    var cache= [];
    
    // For each image
    $imgs.each(function(){
        // Get the data-caption
        var capt = $(this).parent().data("caption");   
        // Make an object for the cache array
        cache.push({
            // This image
            element: this,
            // This caption with no space and lower cased
            text: capt.trim().toLowerCase()
        });
    });


function filter() {
    var query = this.value.trim().toLowerCase();
    // For each cache, pass img
    cache.forEach(function(img){
        var index = 0;
        // If there is some query text
        if (query) {
            // Find if the query text is in the img
            index = img.text.indexOf(query);
        }
        // Show or hide
        img.element.style.display = index === -1 ? 'none' : '';
    });
}

if ('oninput' in $search[0]) {
    $search.on('input', filter);
} else {
    $search.on('keyup', filter);
}
}());

