# MP em Mapas

## Installing

    npm i gulp -g
    npm i

## Running

    npm run server

## Building

    npm run build

## Troubleshooting

If you get the following error:

```
net.js:401
  const prevWriteQueueSize = this._handle.writeQueueSize;
                                          ^

TypeError: Cannot read property 'writeQueueSize' of null
```

This is a [net.js bug with Node 8.8](https://github.com/nodejs/node/issues/16484). You'll need to upgrade Node.js to the last version.
