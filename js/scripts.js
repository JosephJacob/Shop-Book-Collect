(function(d) {
    var products = document.getElementsByClassName('product');
    for(var i = products.length - 1;i >= 0 ; --i) {
     products[i].onclick = function() {
      var src = this.getElementsByTagName('img')[0].src;
      document.location.href = 'demo.html#' +  src;
     }
    }
   })(document);
