const categ = document.querySelector('#categories'),
        categItem = document.querySelectorAll('li.item');

        console.log(`Кількість категорій li.item: ${categItem.length}`);

categItem.forEach(item => {
        const categTitle = item.querySelector('h2').textContent,
                categListLength = item.querySelectorAll('ul > li').length;

        console.log(categTitle);
        console.log(categListLength);
})