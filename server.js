const http = require('http');
const app = http.createServer((req, res) => {
  console.log('收到请求');
  console.log(req.url);
  if (req.url === '/movie/' && req.method === 'GET') {
    const data = [
      {
        id: '1',
        title: '标题123',
        year: '2015',
        posters: {
          thumbnail:
            'http://resizing.flixster.com/DeLpPTAwX3O2LszOpeaMHjbzuAw=/53x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/47/11164719_ori.jpg',
        },
      },
      {
        id: '2',
        title: '标题2',
        year: '2015',
        posters: {
          thumbnail:
            'http://resizing.flixster.com/DeLpPTAwX3O2LszOpeaMHjbzuAw=/53x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/47/11164719_ori.jpg',
        },
      },
      {
        id: '3',
        title: '标题3',
        year: '2015',
        posters: {
          thumbnail:
            'http://resizing.flixster.com/DeLpPTAwX3O2LszOpeaMHjbzuAw=/53x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/47/11164719_ori.jpg',
        },
      },
      {
        id: '4',
        title: '标题4',
        year: '2015',
        posters: {
          thumbnail:
            'http://resizing.flixster.com/DeLpPTAwX3O2LszOpeaMHjbzuAw=/53x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/47/11164719_ori.jpg',
        },
      },
      {
        id: '5',
        title: '标题5',
        year: '2015',
        posters: {
          thumbnail:
            'http://resizing.flixster.com/DeLpPTAwX3O2LszOpeaMHjbzuAw=/53x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/47/11164719_ori.jpg',
        },
      },
      {
        id: '6',
        title: '标题6',
        year: '2015',
        posters: {
          thumbnail:
            'http://resizing.flixster.com/DeLpPTAwX3O2LszOpeaMHjbzuAw=/53x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/47/11164719_ori.jpg',
        },
      },
      {
        id: '7',
        title: '标题7',
        year: '2015',
        posters: {
          thumbnail:
            'http://resizing.flixster.com/DeLpPTAwX3O2LszOpeaMHjbzuAw=/53x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/47/11164719_ori.jpg',
        },
      },
      {
        id: '8',
        title: '标题8',
        year: '2015',
        posters: {
          thumbnail:
            'http://resizing.flixster.com/DeLpPTAwX3O2LszOpeaMHjbzuAw=/53x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/47/11164719_ori.jpg',
        },
      },
      {
        id: '9',
        title: '标题9',
        year: '2015',
        posters: {
          thumbnail:
            'http://resizing.flixster.com/DeLpPTAwX3O2LszOpeaMHjbzuAw=/53x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/47/11164719_ori.jpg',
        },
      },
      {
        id: '10',
        title: '标题10',
        year: '2015',
        posters: {
          thumbnail:
            'http://resizing.flixster.com/DeLpPTAwX3O2LszOpeaMHjbzuAw=/53x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/47/11164719_ori.jpg',
        },
      },
      {
        id: '11',
        title: '标题10',
        year: '2015',
        posters: {
          thumbnail:
            'http://resizing.flixster.com/DeLpPTAwX3O2LszOpeaMHjbzuAw=/53x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/47/11164719_ori.jpg',
        },
      },
      {
        id: '12',
        title: '标题10',
        year: '2015',
        posters: {
          thumbnail:
            'http://resizing.flixster.com/DeLpPTAwX3O2LszOpeaMHjbzuAw=/53x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/47/11164719_ori.jpg',
        },
      },
      {
        id: '13',
        title: '标题10',
        year: '2015',
        posters: {
          thumbnail:
            'http://resizing.flixster.com/DeLpPTAwX3O2LszOpeaMHjbzuAw=/53x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/47/11164719_ori.jpg',
        },
      },
      {
        id: '14',
        title: '标题10',
        year: '2015',
        posters: {
          thumbnail:
            'http://resizing.flixster.com/DeLpPTAwX3O2LszOpeaMHjbzuAw=/53x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/47/11164719_ori.jpg',
        },
      },
    ];
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.write(JSON.stringify(data));
    res.end();
  }
  res.end(1);
});

app.listen(8080);
