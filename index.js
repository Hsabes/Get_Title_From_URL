function getTitle(string){
    let text = document.querySelector('.text');
    let generate = document.querySelector('.get-text');
    let display = document.querySelector("h2")
    let copy = document.querySelector('.copy')
    let isCopied = document.querySelector('p')
    generate.addEventListener('click', () => {
      let val = text.value.split('/').slice(-1)[0];
      val = val.replace(/[^0-9a-z]/gi, ' ').split(' ').map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
      display.textContent = text.value.match(/[/]/g).length > 4 ? '_' + val : val;
      isCopied.textContent = ''
    })
    copy.addEventListener('click', () => {
      let textToCopy = display.textContent;
      navigator.clipboard.writeText(textToCopy);
      text.value = ''
      isCopied.textContent = 'Copied!'
    })
}

getTitle();
