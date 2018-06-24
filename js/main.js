/**
 * Created by vasja on 6/29/2017.
 */
function getRandom(min, max){
    return Math.random() * (max - min) + min;
}

var isSafari = /constructor/i.test(window.HTMLElement);
var isFF = !!navigator.userAgent.match(/firefox/i);


if (isSafari) {
    document.getElementsByTagName('html')[0].classList.add('safari');
}

initBt6();


// Button 6
function initBt6() {
    var bt = document.querySelectorAll('#component-10')[0];
    var turbVal = { val: 0.000001 };
    var turb = document.querySelectorAll('#filter-glitch-2 feTurbulence')[0];
    var btTl = new TimelineLite({ paused: true, onUpdate: function() {
        turb.setAttribute('baseFrequency', '0.00001 ' + turbVal.val); // Firefox bug is value is 0
    },
        onStart: function() {
            bt.style.filter = 'url(#filter-glitch-2)';
        },
        onComplete: function() {
            bt.style.filter = 'none';
        }});

    btTl.to(turbVal, 0.2, { val: 0.06 });
    btTl.to(turbVal, 0.2, { val: 0.000001 });

    bt.addEventListener('mouseover', function() {
        btTl.restart();
    });


};
$("#mylink").bind('click', function () {
    window.location.href = $(this).attr('href');
});

$("[id$='_lnkTDEmailAddress']").click();