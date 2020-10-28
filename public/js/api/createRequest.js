/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  let xhr = new XMLHttpRequest;
  xhr.withCredentials = true;
  if (options.method === 'GET') {
    options.url = options.url + '?mail=' + options.data.mail + '&password=' + options.data.password;
    xhr.open(options.method, options.url)
    xhr.send()
  } else {
    let formData = new FormData;
    formData.append('mail', options.data.mail);
    formData.append('password', options.data.password);
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
