const student = {
    firstName: "Вадим",
    lastName: "Гефнер",
    age: 17,
    grades: [12, 11, 10, 12, 11],
    group: "КН-31",
    getAverageGrade() {
        const sum = this.grades.reduce((a, b) => a + b, 0);
        return (sum / this.grades.length).toFixed(2);
    }
};

const books = [
    { title: "Чорна рада", author: "Пантелеймон Куліш", year: 1663 },
    { title: "Інститутка", author: "Марко Вовчок", year: 1862 },
    { title: "Тіні забутих предків", author: "М. Коцюбинський", year: 1911 },
    { title: "Мина Мазáйло", author: "Микола Гурович Куліш", year: 1928 },
    { title: "За двома зайцями", author: "Старицький Михайло", year: 1883 },
    { title: "БотакЄ", author: "Тарас Прохасько", year: 2011 }
];

const studentDiv = document.getElementById("student-info");
studentDiv.innerHTML = `
    <p>👤 Ім’я: <strong>${student.firstName}</strong></p>
    <p>👤 Прізвище: <strong>${student.lastName}</strong></p>
    <p>🎓 Вік: ${student.age}</p>
    <p>📘 Група: ${student.group}</p>
    <p>📊 Оцінки: ${student.grades.join(", ")}</p>
    <p class="highlight">⭐ Середній бал: ${student.getAverageGrade()}</p>
`;

const bookTableBody = document.querySelector("#book-table tbody");
books.forEach(book => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.year}</td>`;
    bookTableBody.appendChild(row);
});

const oldestBook = books.reduce((oldest, curr) => (curr.year < oldest.year ? curr : oldest));
document.getElementById("oldest-book").innerHTML = `📖 <strong>${oldestBook.title}</strong> (${oldestBook.year})`;

const recentBooksList = document.getElementById("recent-books");
books.filter(book => book.year > 2010).forEach(book => {
    const li = document.createElement("li");
    li.textContent = `${book.title} (${book.year})`;
    recentBooksList.appendChild(li);
});

const numbers = [3, 7, 12, 5, 9];
const doubled = numbers.map(n => n * 2);
document.getElementById("doubled-numbers").textContent = `🔢 ${doubled.join(", ")}`;

const propertiesList = document.getElementById("student-properties");
for (let key in student) {
    if (typeof student[key] !== 'function') {
        const li = document.createElement("li");
        li.textContent = `${key}: ${student[key]}`;
        propertiesList.appendChild(li);
    }
}
