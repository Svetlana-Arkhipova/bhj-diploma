/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  let xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  if (options.method === 'GET') {
    options.url = options.url + '?';
    let keys = Object.keys(options.data);
    let lastKey = keys[keys.length - 1];
    for (let key in options.data) {
      options.url = options.url + key + '=' + options.data[key];
      if (key != lastKey) {
          options.url = options.url + '&';
      }
    }
    xhr.open(options.method, options.url)
    xhr.send()
  } else {
    let formData = new FormData();
    for (let key in options.data) {
      formData.append(key, options.data[key]);
    }
    xhr.open(options.method, options.url);
    xhr.send(formData);
  }
  xhr.responeType = options.responseType;
  xhr.onload = () => {
    if (xhr.status === 200) {
      err = null;
      options.callback(err, xhr.response);
    } else {
      err = xhr.statusText;
      options.callback(err);
    }
  }
  xhr.onerror = (error) => {
    options.callback(error);
  }
  return xhr;
};
