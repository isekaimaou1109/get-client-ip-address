## **THIS PACKAGE IS NOT USED FOR COMMERCIAL PURPOSE** ##

***

### **__Usage:__** ###
- `Case 1:` When using in `CommonJS (Node environment)`
```javascript
(async function () {
	return await (await import('get-real-client-ip')).getClientInformation();
})();
```

- `Case 2:` When using in `ESM`
```javascript
import { getClientInformation } from 'get-real-client-ip'

getClientInformation()
  .then(ip => console.log(ip))
  .catch(e => console.error(e))
```

### **__Result:__** ###
```json
{
  "ip": "x.x.x.x",
  "registry": "<registry-name>",
  "countrycode": "DE",
  "countryname": "Germany",
  "asn": {
    "code": "X",
    "name": "<isp-name>",
    "route": "X.X.X.X/24",
    "start": "X.X.X.X",
    "end": "X.X.X.X",
    "count": "X"
  },
  "spam": false,
  "tor": false
}
```


### **Hope all of you guys like this small package, please give a star. Thank you. :heart::heart:** ###