const categ = document.querySelector('#categories'),
  categItem = document.querySelectorAll('li.item');

console.log(`Number of categories: ${categItem.length}`);

categItem.forEach(item => {
  const categTitle = item.querySelector('h2').textContent,
    categListLength = item.querySelectorAll('ul > li').length;

  console.log(`Category: ${categTitle}`);
  console.log(`Elements: ${categListLength}`);
});
