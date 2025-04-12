function mutateText(): void {
  const input = (document.getElementById('inputText') as HTMLTextAreaElement).value;

  const transformations: ((text: string) => string)[] = [
    text => text.split('').reverse().join(''),
    text => text.toUpperCase(),
    text => text.toLowerCase(),
    text => `? ${text} ?`,
    text => text.replace(/\s/g, ' ?? '),
    text => [...text].map(c => c + '??').join('')
  ];

  const randomIndex = Math.floor(Math.random() * transformations.length);
  const result = transformations[randomIndex](input);

  (document.getElementById('output') as HTMLParagraphElement).textContent = result;
}
