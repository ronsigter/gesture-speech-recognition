import React from 'react'

export default () => {
  const connect = () => {
    console.log('Requesting Bluetooth Device...');
    navigator.bluetooth.requestDevice({ acceptAllDevices: true })
    .then(device => {
        console.log('> Found ' + device.name);
    })
    // .then(server => {
    //     console.log('Getting Service 0xffe5 - Light control...');
    //     return server.getPrimaryService(0xffe5);
    // })
    // .then(service => {
    //     console.log('Getting Characteristic 0xffe9 - Light control...');
    //     return service.getCharacteristic(0xffe9);
    // })
    // .then(characteristic => {
    //     console.log('All ready!');
    //     ledCharacteristic = characteristic;
    //     onConnected();
    // })
    .catch(error => {
        console.log('Argh! ' + error);
    });
  }

  return (
    <div>
      <button onClick={connect}>
        Connect
      </button>
    </div>
  )
}
