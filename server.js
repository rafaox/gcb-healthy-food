module.exports = () => {
 
  function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
  const data = {
    recipes: [
      {
        "id": randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
        "title": "Broccoli Salad with Bacon",
        "image": "/comida_1.svg"
      },
      {
        "id": randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
        "title": "Classic Beef Burgers",
        "image": "/comida_2.svg"
      },
      {
        "id": randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
        "title": "Classic Potato Salad",
        "image": "/comida_3.svg"
      },
      {
        "id": randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
        "title": "Cherry Cobbler on the Grill",
        "image": "/comida_4.svg"
       }
    ],
    posts: [
      {
        "id": randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
        "image": "/blog_image_1.svg",
        "title": "Quick-start guide to nuts and seeds",
        "avatar": "/kevin.png",
        "author": "Kevin Ibrahim"
      },
      {
        "id": randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
        "image": "/bloco_image_2.svg",
        "title": "Nutrition: Tips for Improving Your Health",
        "avatar": "/mike.png",
        "author": "Mike Jackson"
      },
      {
        "id": randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
        "image": "/bloco_image_3.svg",
        "title": "The top 10 benefits of eating healthy",
        "avatar": "/bryan.png",
        "author": "Bryan McGregor"
      },
      {
        "id": randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
        "image": "/bloco_image_4.svg",
        "title": "What Makes a Healthy Diet?",
        "avatar": "/jashua.png",
        "author": "Jashua"
       }
    ]
  }

  return data;
}