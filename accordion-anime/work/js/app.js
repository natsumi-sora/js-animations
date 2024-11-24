document.querySelectorAll('.list-tit').forEach(title => {
  title.addEventListener('click', () => {
    const content = title.nextElementSibling;
    if (content.style.height && content.style.height !== '0px') {
      content.style.height = '0';
      content.style.padding = '0';
    } else {
      const contentHeight = content.scrollHeight;
      content.style.height = contentHeight + 'px';
      content.style.padding = '1rem';
    }
  });
});
