---
title: Work with the geolocation API in JavaScript
spoiler: How to work with the geolocation API to get (and watch) the position of a user
date: '2019-09-07'
---

The Geolocation interface represents an object which can be used to programmatically obtain the position of the device / user. This allows for some interesting user cases like customized results based on the location of a user, price discrimination etc.

An object with this interface is obtained using the navigator.geolocation property implemented by the Navigator object.

This object contains the following methods:

+ `Geolocation.getCurrentPosition()`: Determines the device's current location and gives back a Position object with the data
+ `Geolocation.watchPosition()`: Returns a long value representing the newly established callback function to be invoked whenever the device location changes
+ `Geolocation.clearWatch()`: Removes the particular handler previously installed using watchPosition()

## Get the geo location / position of a user

With `getCurrentPosition` you can obtain the position of the device. If you're calling that message for the first time for a website, the user will be asked for permission to the location.

```javascript
navigator.geolocation.getCurrentPosition(position => {
  console.log(position)
})
```

The method expects a callback which calls itself with the current position. That `Position` object contains two properties:

+ `coords`, a Coordinates object
+ `timestamp`, the UNIX timestamp when the position was retrieved

The `Coordinates` object comes with several properties that define the location:

+ `accuracy` the accuracy of the position measured in meters
+ `altitude` the altitude value measured in meters
+ `altitudeAccuracy` the accuracy of the altitude measured, expressed in meters
+ `heading` the direction towards which the device is traveling. Expressed in degrees (0 = North, East = 90, South = 180, West = 270)
+ `latitude` the latitude value measured in meters
+ `longitude` the longitude value measured in meters
+ `speed` the speed at which the device is traveling, expressed in meters per second

It's not guaranteed, that all the properties will have values. Some of them will just be null. That depends on the device and browser.

A `Position` object might look something like

```javascript
{
  coords: {
    accuracy: 1446,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: 52.5082624,
    longitude: 13.2972544,
    speed: null,
  },
  timestamp: 1567849894270
}
```

## If the user denies the position

As mentioned the user is asked to allow the fetching of the position. But what happens if the user denies this request? `getCurrentPosition` has a second parameter, which is also a callback, that is called with an error object.

This error object contains a `code` property, that has three states:

+ **1**:  permission denied
+ **2**:  position unavailable
+ **3**:  timeout

```javascript
navigator.geolocation.getCurrentPosition(position => {
  console.log(position)
}, error => {
  console.log(error)
})
```

## Configure the position request

As a third parameter the `getCurrentPosition` method takes an options object to configure your position requests:

+ `timeout`: it might take a while for your browser to access the location, with the timeout (in milliseconds) you can configure who long to wait before calling the error callback
+ `maximumAge` set the maximum age (in milliseconds) of the position which is cached by the browser
`enableHighAccuracy` a boolean (default `false`); set to true if you require a position with the highest level of accuracy possible (might take more time and has a higher power consumption)


```javascript
navigator.geolocation.getCurrentPosition(position => {
  console.log(position)
}, error => {
  console.log(error)
},
{
  timeout: 5000, // 5 seconds timeout
  maximumAge: 10000, // accept only position, that are not older than 10 seconds
  enableHighAccuracy: true // high accuracy
})
```

## Watch the geo location of a user

Instead of getting the position only once, you can also watch the position of a user and get it everytime it changes.

```javascript
const id = navigator.geolocation.watchPosition(position => {
	console.log(position)
});

// stop watching after 1 minute
setTimeout(() => {
  navigator.geolocation.clearWatch(id)
}, 60 * 1000)
```

As you see in the example you can use `clearWatch` to stop watching a positon. It takes the id of the watch process as an argument, which is returned by `watchPosition`.

`watchPosition` has the same signature as `getCurrentPosition`. That means the second parameter is the error callback and the third parameter is the configuration object.