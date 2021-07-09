First start the app

```
yarn start
```

In your consuming app add the following before you init the shippo sdk. Shippo doesn't expose the endpoint as an option so we have to mutate the constructor static values.

```js
import Shippo from 'shippo';

Shippo.DEFAULT_HOST = 'localhost';
Shippo.DEFAULT_PROTOCOL = 'http';
Shippo.DEFAULT_PORT = '8080';
```

If you find a new mock response that is relevant, please add it to the collection in `src/shipment/responses` so we can share Shippo tribulations across the team.