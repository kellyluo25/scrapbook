$(window).load(function () {
$('section').masonry({
itemSelector : ".entry", },
function() { $('section').masonry({ appendedContent: $(this) }); } ); });

$(function(){ var $container = $('section');
$container.isotope({
    itemSelector : '.entry' });
             var $optionSets = $('.sort .option-set'),
                 $optionLinks = $optionSets.find('a');
    $optionLinks.click(function(){
        var $this = $(this); if ( $this.hasClass('selected') ) { return false; }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
    // make option object dynamically, i.e. { filter: '.my-filter-class' }
    var options = {},
    key = $optionSet.attr('data-option-key'),
    value = $this.attr('scrapbook-filter');
    // parse 'false' as false boolean
    value = value === 'false' ? false : value;
    options[ key ] = value;
    if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
    changeLayoutMode( $this, options )
    } else {  $container.isotope( options ); }
    return false; });
 });