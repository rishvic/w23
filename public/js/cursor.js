const cursor_follower = document.getElementById('cursor_follower');
const cursor_followerStyle = cursor_follower.style;

document.addEventListener('mousemove', e => {
  window.requestAnimationFrame(() => {
    cursor_followerStyle.top = `${ e.clientY - cursor_follower.offsetHeight/2 }px`;
    cursor_followerStyle.left = `${ e.clientX - cursor_follower.offsetWidth/2 }px`;
  });
});