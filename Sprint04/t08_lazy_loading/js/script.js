document.addEventListener("DOMContentLoaded", function() {  
    var now = document.getElementById('now');
    var collection;
    
    function initlazyimg() {
        let tag1 = document.getElementById("tag1");
        setTimeout(function() {
            tag1.style.display = 'none';
        }, 3000);

        var scripts = document.getElementsByTagName('script');
        var section = scripts[scripts.length-1].parentNode;
        var images = section.getElementsByTagName('img');
        for (var i = 0; i < images.length; i++) {
            var datasrc = images[i].getAttribute('data-src');
            var src = document.createAttribute('src');
            src.value = datasrc;
            images[i].setAttributeNode(src);
            images[i].removeAttribute('datasrc');
        }
        var now = document.getElementById('now');
        now.innerHTML = '20';
        tag1.classList.add("complete");
        tag1.style.backgroundColor = "green";
        now.insertAdjacentHTML('beforeend', `${images.length - collection.length}`);
    }
    
    document.addEventListener("scroll", initlazyimg);
});
    