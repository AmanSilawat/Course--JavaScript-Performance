# Load Performance

## Latency and Bandwidth

- **Bandwidth** is how much stuff you can fit through the tube per second.
- **Latency** is long it takes to get to the other end of the tube.

[YouTube Ref Link:](https://www.youtube.com/watch?v=ak4EZQB4Ylg) Front End Center


## Caching

### Cache-control headers
- no-store
    - the browser get a new version every time.
- no-cache
    - store a copy, but you can't use it without checking with the server.
- max-age
    - Tell the browser not to bother if whatever asset it has is less than certain number of seconds old.
- s-maxage
    - For CDNs only. Tell the CDN to keep it forever. But don't tell the browser to do it.
    - 
- immutable
    - Since the browser doesn't need to check with the server regarding whether or not the asset is still valid, this means less network bandwidth is consumed.


Content-Addressable Storage : main.5484d8e4e54.js


## Service Workers

I want to check this before I pull something out of the cache, 

we have some stuff in cache, some stuff on the network. Every time a network request is made it goes to service work, it's like hey, talk to the cache, right? Or talk to the cache, if it's not in the cache talk to the network. talk to the network and get the fresh version, and then put it in the cache and service worker do some more work.