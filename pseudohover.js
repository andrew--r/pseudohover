document.addEventListener('DOMContentLoaded', function() {
  var toArray = function(pseudoarray) {
    return [].slice.call(pseudoarray);
  };

  var links = toArray(document.querySelectorAll('a'));

  links.forEach(function(link) {
    var href = link.getAttribute('href');
    if (href == '#' || href == '') return;
    var sameLinks = toArray(document.querySelectorAll('a[href="' + href + '"]'));

    link.addEventListener('mouseover', function() {
      sameLinks.forEach(function(sameLink) {
        sameLink.classList.add('js-hovered');
      });
    });

    link.addEventListener('mouseout', function() {
      sameLinks.forEach(function(sameLink) {
        sameLink.classList.remove('js-hovered');
      });
    });
  });
});
