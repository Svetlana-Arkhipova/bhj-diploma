/**
 * Класс Transaction наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/transaction'
 * */
class Transaction {
  constructor() {
    super();
    this.url = '/transaction';
  }
}
