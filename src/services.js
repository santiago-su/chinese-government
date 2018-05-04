const baseUrl = 'http://10.133.7.137:3000';

const enroll = (image, name) => {
  return fetch(`${baseUrl}/enroll`, {
    image,
    name
  })
  .then(res => res.json())
  .catch(error => console.error(error));
};

const verify = (image, name) => {
  return fetch(`${baseUrl}/verify`, {
    image,
    name
  })
  .then(res => res.json())
  .catch(error => console.error(error));
};

export default {
  enroll,
  verify
}
