/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * */
class Entity {
   static URL = '';
  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
  static list( data, callback = f => f ) {
    let xhr = createRequest({
      url: this.URL,
      method: 'GET',
      data: data,
      responseType: 'json',
      callback,
    })
    return xhr;
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create( data, callback = f => f ) {
    const newData = Object.assign({}, data, {_method: 'PUT'});
    let xhr = createRequest({
      url: this.URL,
      method: 'POST',
      data: newData,
      responseType: 'json',
      callback,
    })
    return xhr;
  }

  /**
   * Получает информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static get( id = '', data, callback = f => f ) {
    let xhr = createRequest({
      url: this.URL,
      method: 'GET',
      data: data,
      responseType: 'json',
      callback,
    })
    return xhr;
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove( id = '', data, callback = f => f ) {
    const newData = Object.assign({}, data, {_method: 'DELETE', id: id});
    let xhr = createRequest({
      url: this.URL,
      method: 'POST',
      data: newData,
      responseType: 'json',
      callback,
    })
    return xhr;
  }
}
