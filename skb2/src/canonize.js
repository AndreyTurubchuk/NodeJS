export default function canonize(url) {
//  const re = new RegExp('@?(https?:)?(\/\/)?((Авааз|Badoo|Facebook|Instagram|Google|LinkedIn|Pinterest|Renren|Twitter|' +
  //  'ВКонтакте|Одноклассники|telegram|vk|vkontakte|ok)[^\/]*\/)?([a-zA-Z0-9]*)', 'i');

  const re = new RegExp('@?(https?:)?(\/\/)?(([a-z])[^\/]*\/)?([a-zA-Z0-9]*)', 'i');
  const username = url.match(re)[5];
  return '@' + username;
}
