(function(){
  var sl=document.getElementById('sl');
  if(sl){
    var t=sl.querySelector('.track'),n=t.children.length,i=0,d=sl.querySelector('.dots');
    for(var k=0;k<n;k++){var e=document.createElement('i');e.dataset.k=k;d.appendChild(e)}
    var go=function(x){i=(x+n)%n;t.style.transform='translateX(-'+i*100+'%)';[].forEach.call(d.children,function(c,j){c.classList.toggle('on',j===i)})};
    sl.addEventListener('click',function(e){var b=e.target.closest('button');if(b)go(i+ +b.dataset.d);if(e.target.dataset.k)go(+e.target.dataset.k)});
    go(0);
  }
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
    els.forEach(function(r){io.observe(r)});
  }else{els.forEach(function(r){r.classList.add('in')})}
  var here=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('nav div a').forEach(function(a){if(a.getAttribute('href').split('/').pop()===here)a.setAttribute('aria-current','page')});
})();
