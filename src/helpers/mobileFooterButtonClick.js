function mobileFooterButtonClick(event) {
  const arrowImg = event.currentTarget.children[0];
  const list = event.currentTarget.nextSibling;
  if (list.style.display === 'block') {
    list.style.display = 'none';
    arrowImg.style.transform = 'rotate(360deg)';
  } else {
    list.style.display = 'block';
    arrowImg.style.transform = 'rotate(180deg)';
  }
}

export default mobileFooterButtonClick;
