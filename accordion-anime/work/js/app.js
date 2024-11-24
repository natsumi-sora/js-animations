document.querySelectorAll('.list-tit').forEach(title => {
    title.addEventListener('click', () => {
      const content = title.nextElementSibling;
        if (content.style.height && content.style.height !== '0px') {
        content.style.height = '0';
        content.style.padding = '0';
      } else {
        document.querySelectorAll('.list-content').forEach(otherContent => {
          otherContent.style.height = '0';
          otherContent.style.padding = '0';
        });
        const contentHeight = content.scrollHeight; // 要素の本来の高さを取得
        content.style.height = contentHeight + 'px';
        content.style.padding = '1rem';
      }
    });
  });
  