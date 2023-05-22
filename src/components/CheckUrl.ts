export function checkApiParam(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const apiParam = urlParams.get('api');
  
    if (apiParam === '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b') {
      const myIframe = document.getElementById('banner') as HTMLElement;
      myIframe.style.display = 'block';
    } else {
      const myIframe = document.getElementById('banner') as HTMLElement;
      myIframe.style.display = 'none';
    }
  }