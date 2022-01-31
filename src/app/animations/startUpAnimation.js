import anime from "animejs";

const startUpAnimation = () => {
  const memoryAnimation = document.querySelector('.memory-animation');
  
  let timeline = anime.timeline({
    easing: 'linear',
    duration: 1000
  })

  timeline
    .add({
      targets: memoryAnimation,
      complete: function() {
        document.querySelector('.parent-memory-animation').style.opacity = 1
      }
    })
    .add({
      targets: memoryAnimation,
      innerHTML: [640, 65536],
      round:1,
      easing: 'linear',
      
    })
    .add({
      targets: '.copyright-animation',
      complete: function() {
        document.querySelector('.copyright-animation').style.opacity = 1
      }
    })
    .add({
      targets:'.detecting-animation--1',
      complete: function() {
        document.querySelector('.detecting-animation--1').style.opacity = 1
      }
    })
    .add({
      targets:'.detecting-animation--2',
      complete: function() {
        document.querySelector('.detecting-animation--2').style.opacity = 1
      }
    })
    .add({
      targets:'.detecting-animation--3',
      complete: function() {
        document.querySelector('.detecting-animation--3').style.opacity = 1
      }
    }, '+= 2000')
    .add({
      targets:'.detecting-animation--4',
      complete: function() {
        document.querySelector('.detecting-animation--4').style.opacity = 1
      }
    }, '-= 500')
    .add({
      targets:'.startup-img-wrapper',
      complete: function() {
        document.querySelector('.startup-img-wrapper').style.zIndex = 20
        document.querySelector('audio').play()
      }
    })
    .add({
      targets:['.startup-img-wrapper', '.startup-screen'],
      complete: function() {
        document.querySelector('.startup-img-wrapper').style.zIndex = -10
        document.querySelector('.startup-screen').style.zIndex = -11
      }
    }, '+= 8000')
};

export default startUpAnimation;