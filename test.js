//Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку.
const bankAccount = {
  ownerName: "Ostap",
  accountNumber: 322,
  balance: 1000,
  deposit(amount) {
    this.balance += amount;
    console.log(`рахунок поповнено, на рахунку ${this.balance}`);
  },
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("недостатньо коштів");
      return;
    }
    this.balance -= amount;
    console.log(`зняття коштів успішне, на рахунку ${this.balance}`);
  },
};

if (confirm("бажаєте поповнити рахунок?")) {
  const amount = Number(prompt("введіть суму для поповнення"));
  console.log(amount);
  if (amount > 0 && !isNaN(amount)) {
    bankAccount.deposit(amount);
  } else {
    alert("не правильно");
  }
} else if (confirm("бажаєте зняти кошти?")) {
  const amount = Number(prompt("введіть суму для зняття"));
  console.log(amount);
  if (amount > 0 && !isNaN(amount)) {
    bankAccount.withdraw(amount);
  } else {
    alert("не правильно");
  }
}




//Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки
const userImput = Number(prompt("яка в вас температура"));
const weather = {
  temperature: userImput,
  humidity: 11,
  windSpeed: 10,
  checkTemperature(newTemperature) {
    if (newTemperature < 0) {
      return true;
    }
    return false;
  },
};

console.log(weather.checkTemperature(userImput));




//Створіть об’єкт "user", який буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password.
const user = {
  name: "Max",
  email: "user@gmail",
  passworld: "qwerty",
  login(email, passworld) {
    if (email === this.email && passworld === this.passworld) {
      console.log("вхід виконано");
      alert("вхід виконано");
    } else {
      console.log("сталася помилка");
      alert("сталася помилка");
    }
  },
};
user.login("user@gmail", "qwerty");




//Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль.
const movie = {
  title: "Kung Fu Panda",
  director: "Mark Osborne",
  Year: "2008",
  Rating: 7.8,
  goodRating() {
    if (this.Rating >= 8) {
      return true;
    } else {
      return false;
    }
  },
};
console.log(movie, movie.goodRating());
