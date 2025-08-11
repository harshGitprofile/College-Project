const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

// Add event listener to the bar element
if(bar)
{
    bar.addEventListener("click", ()  => {
        nav.classList.add('active');
    })
}

if(close)
{
    close.addEventListener("click", ()  => {
        nav.classList.remove('active');
    })
}

//for entire images ye run hoga 
function setupImageSwap() {
        var mainImgs = document.querySelectorAll(".MainImg");//sare mainimg class wale 
        var smallImgs = document.querySelectorAll(".small-img");

        smallImgs.forEach(function(img, index) {//hr ek smallimg or uska imdex
            img.onclick = function() {//event listener
                // Find the closest parent with class 'single-pro-image'
                var parent = this.closest('.single-pro-image');
                if (parent) {
                    // Find the MainImg within this parent
                    var mainImg = parent.querySelector('.MainImg');
                    if (mainImg) {
                        mainImg.src = this.src;
                    }
                }
            } //inner body close
        });//for each close
    }//main outermost function close 

    // Run the setup when the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', setupImageSwap);
