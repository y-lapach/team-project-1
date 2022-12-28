/*----------ADVANTAGES ANIMATION ON SCROLL--------------*/
const animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0) {

  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params){
    // console.log(animItems.length);
    for (let index = 0; index < animItems.length; index++){
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      // console.log(animItemHeight, window.innerHeight);
      if(animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      // console.log(pageYOffset, animItemOffset, animItemPoint, pageYOffset, animItemOffset, animItemHeight);
      // 2269.60009765625 2609.78759765625 793.25 2269.60009765625 2609.78759765625 71
      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
        console.log(animItem);
        animItem.classList.add('_active');
      } else {
        animItem.classList.remove('_active');
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
}


/*H2 ANIMATION*/
const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('title-anim');
    }
  });
});

observer.observe(document.querySelector('.to-anim1'));
observer.observe(document.querySelector('.to-anim2'));
observer.observe(document.querySelector('.to-anim3'));
observer.observe(document.querySelector('.to-anim4'));

/*BACK TO TOP*/
$(document).ready(() => {
  
  const backToTop = $('#backToTop')
  const amountScrolled = 300
  
  $(window).scroll(() => {
    $(window).scrollTop() >= amountScrolled 
      ? backToTop.fadeIn('fast') 
      : backToTop.fadeOut('fast')
  })
  
  backToTop.click(() => {
    $('body, html').animate({
      scrollTop: 0
    }, 400)
    return false
  })
})