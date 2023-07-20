const KievRPSSecAuth = 'FABiBBRaTOJILtFsMkpLVWSG6AN6C/svRwNmAAAEgAAACI+b+0yiFALvIAQRizwCH4dJfV8YbYmKiNwup8NqC1N3Vu1jfp42Ohk5coKAW/soH+cSyBJ3aXi4U3Jlnm1eet25i75DOe08/bZWCihmKoOv/MKGbPPOsEaEo5XGTb0rA3+qRqwzc6LpnaW5sfGZ+7t8JcvqPMQ5JmRUkq2Jiv7YhoHQFYIzPRDDRuQa3o8FUa2lW5geoXxO1sYZhumJdSTadvRcw4c6hdR7U3m/bdYv3LcrNSR+8ia1fZLvv1QFdIHfbpyuMUVqbidfwGZL2xFEB7M14b9nEMyN6n10RzCki4pYmP6+YWtafR9cCoEMu4DoVkhMAqpRIyi3lOW2UyuOoHOkBgMOVKlotGQoA77fqri9ptK41zhUo3LaONzFDkQtzF3Ebz3Z2i34XwoHN2H72JVoF0kSkhuHg0kybZuATxYNmHMQte0O84Fp3A/vUPsqWlkkeB1XdRx64isspc7AOgrMTXDlvsvsr38Lpxv+jugAXU7s0DmnLtyBujFoM/7WH6Bn5aGO3R039rD7406k94kLRzy6laIKCMZkTajrdEPni67F51Jb2XP3PWVUQi+IeEwuBNY/ZuD0j7EYx8p4E0AgjWx+g6NcalXsSD1flAEIjD3GaIBXIdebfHci9ECNcGZL0qeYVug52hOm73icA3o2XXqJxWmP+VoZK4EX0cIcodAidBkVBIy+ohGayiin219a+uzJZh490y1tl5hOmYIGOFjG/YNJpp61ysPU0hQWu2Qo3hQvBRtSGI1zWg++pP21FN3JiQziGcMX8dQkfWzK7iOPtCMfMT36v96iTcD1js9IGTHNp1BnDGuqaZKNblso9YfBVz5EThnM2Rx68jo4/Eeu2YyakNTGpyzyGRObzM018vDJaCJkS2Ek8AbmAjrOdkDA2jjH660Pv+aB+/PqnCanSFUwBrSqgi97/l0AhabgmuQzM0S/2zxpWfFGahAelfqZL+qqBkC0rVAKJYi22MwsIE7jQNMhpmd4Ff76FfQXIDfopa94w/IaiGFOp5AS99oY0lwhFracpNyDOWk6fedHK0kZ8baZjYl1Uff34Z6AYG1XQt49/Nl9NibGwBZGqcq+kRNOAI1CjBdBDD9ojFluPtqghVeQN5wVwSqg75VvH7H8Qp6YNY54XPE0x0PpDoLrWwOPPi3cb36elAlOFwscOHAVgCatUebEtrmUXMWMafcUBoMiG6e4oOv0bIixzRA+fYcPoSK+0hPwpiWU54vfWA2c2n/eITuxjRaTzdbHbP+8q9z6DCTRH7RGc7Rs5JUX3T4XT6Yhf/X7ySpr9E/VYn+fsYcVUMJxg+QsTpLCvLigIaqHIL2BbCOfBRYOTUM1ajWoFWv1gYMvOdNcCuGtcicaF/XQkzC1Seu4V+mrFil8mvPpLrk4NgLSJ2uVMfi7GOIUAMpc1cWUzQEhrrxNa7ZVk4n9WrR3';
const SYDNEY_ORIGIN = 'https://sydney.bing.com';
const KEEP_REQ_HEADERS = [
  'accept',
  'accept-encoding',
  'accept-language',
  'connection',
  'cookie',
  'upgrade',
  'user-agent',
  'sec-websocket-extensions',
  'sec-websocket-key',
  'sec-websocket-version',
  'x-request-id',
  'content-length',
  'content-type',
  'access-control-request-headers',
  'access-control-request-method',
];
const IP_RANGE = [
  ['3.2.50.0', '3.5.31.255'], //192,000
  ['3.12.0.0', '3.23.255.255'], //786,432
  ['3.30.0.0', '3.33.34.255'], //205,568
  ['3.40.0.0', '3.63.255.255'], //1,572,864
  ['3.80.0.0', '3.95.255.255'], //1,048,576
  ['3.100.0.0', '3.103.255.255'], //262,144
  ['3.116.0.0', '3.119.255.255'], //262,144
  ['3.128.0.0', '3.247.255.255'], //7,864,320
];

/**
 * 随机整数 [min,max)
 * @param {number} min
 * @param {number} max
 * @returns
 */
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

/**
 * ip 转 int
 * @param {string} ip
 * @returns
 */
const ipToInt = (ip) => {
  const ipArr = ip.split('.');
  let result = 0;
  result += +ipArr[0] << 24;
  result += +ipArr[1] << 16;
  result += +ipArr[2] << 8;
  result += +ipArr[3];
  return result;
};

/**
 * int 转 ip
 * @param {number} intIP
 * @returns
 */
const intToIp = (intIP) => {
  return `${(intIP >> 24) & 255}.${(intIP >> 16) & 255}.${(intIP >> 8) & 255}.${intIP & 255}`;
};

const getRandomIP = () => {
  const randIndex = getRandomInt(0, IP_RANGE.length);
  const startIp = IP_RANGE[randIndex][0];
  const endIp = IP_RANGE[randIndex][1];
  const startIPInt = ipToInt(startIp);
  const endIPInt = ipToInt(endIp);
  const randomInt = getRandomInt(startIPInt, endIPInt);
  const randomIP = intToIp(randomInt);
  return randomIP;
};

/**
 * home
 * @param {string} pathname
 * @returns
 */
const home = async (pathname) => {
  const baseUrl = 'https://raw.githubusercontent.com/adams549659584/go-proxy-bingai/master/';
  let url;
  // if (pathname.startsWith('/github/')) {
  if (pathname.indexOf('/github/') === 0) {
    url = pathname.replace('/github/', baseUrl);
  } else {
    url = baseUrl + 'cloudflare/index.html';
  }
  const res = await fetch(url);
  const newRes = new Response(res.body, res);
  if (pathname === '/') {
    newRes.headers.delete('content-security-policy');
    newRes.headers.set('content-type', 'text/html; charset=utf-8');
  }
  return newRes;
};

export default {
  /**
   * fetch
   * @param {Request} request
   * @param {*} env
   * @param {*} ctx
   * @returns
   */
  async fetch(request, env, ctx) {
    const currentUrl = new URL(request.url);
    // if (currentUrl.pathname === '/' || currentUrl.pathname.startsWith('/github/')) {
    if (currentUrl.pathname === '/' || currentUrl.pathname.indexOf('/github/') === 0) {
      return home(currentUrl.pathname);
    }
    const targetUrl = new URL(SYDNEY_ORIGIN + currentUrl.pathname + currentUrl.search);

    const newHeaders = new Headers();
    request.headers.forEach((value, key) => {
      // console.log(`old : ${key} : ${value}`);
      if (KEEP_REQ_HEADERS.includes(key)) {
        newHeaders.set(key, value);
      }
    });
    newHeaders.set('host', targetUrl.host);
    newHeaders.set('origin', targetUrl.origin);
    newHeaders.set('referer', 'https://www.bing.com/search?q=Bing+AI');
    const randIP = getRandomIP();
    // console.log('randIP : ', randIP);
    newHeaders.set('X-Forwarded-For', randIP);
    newHeaders.set('Cookie', 'KievRPSSecAuth='+KievRPSSecAuth+';');
    const oldUA = request.headers.get('user-agent');
    const isMobile = oldUA.includes('Mobile') || oldUA.includes('Android');
    if (isMobile) {
      newHeaders.set(
        'user-agent',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.7 Mobile/15E148 Safari/605.1.15 BingSapphire/1.0.410427012'
      );
    } else {
      newHeaders.set('user-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.35');
    }

    // newHeaders.forEach((value, key) => console.log(`${key} : ${value}`));
    const newReq = new Request(targetUrl, {
      method: request.method,
      headers: newHeaders,
      body: request.body,
    });
    // console.log('request url : ', newReq.url);
    const res = await fetch(newReq);
    return res;
  },
};
