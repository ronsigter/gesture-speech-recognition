import React from 'react'

let deviceCache = null
let characteristicCache = null

const Service = 'heart_rate';
const Characteristic = 'heart_rate_measurement';

const options = {
  filters: [{services: [Service]}],
  // acceptAllDevices: true
}

export default () => {
  // Launch Bluetooth device chooser and connect to the selected
  const connect = () => {
    return (deviceCache ? Promise.resolve(deviceCache) :
      requestBluetoothDevice()).
      then(device => connectDeviceAndCacheCharacteristic(device)).
      then(characteristic => startNotifications(characteristic)).
      catch(error => log(error))
  }

  // Disconnect from the connected device
  const disconnect = () => {
    if (deviceCache) {
      log('Disconnecting from "' + deviceCache.name + '" bluetooth device...')
      deviceCache.removeEventListener('gattserverdisconnected',
          handleDisconnection)

      if (deviceCache.gatt.connected) {
        deviceCache.gatt.disconnect()
        log('"' + deviceCache.name + '" bluetooth device disconnected')
      }
      else {
        log('"' + deviceCache.name +
            '" bluetooth device is already disconnected')
      }
    }

    if (characteristicCache) {
      characteristicCache.removeEventListener('characteristicvaluechanged',
          handleCharacteristicValueChanged)
      characteristicCache = null
    }

    deviceCache = null
  }

  // Send data to the connected device
  const send = (data) => {
    data = String(data)

    if (!data || !characteristicCache) {
      return
    }

    writeToCharacteristic(characteristicCache, data)
    log(data, 'out')
  }

  const requestBluetoothDevice = () => {
    log('Requesting bluetooth device...')

    return navigator.bluetooth.requestDevice(options).
      then(device => {
        log('"' + device.name + '" bluetooth device selected')
        deviceCache = device

        deviceCache.addEventListener('gattserverdisconnected',
          handleDisconnection)

        return deviceCache
      })
  }

  const handleDisconnection = (event) => {
    let device = event.target

    log('"' + device.name +
        '" bluetooth device disconnected, trying to reconnect...')

    connectDeviceAndCacheCharacteristic(device).
        then(characteristic => startNotifications(characteristic)).
        catch(error => log(error))
  }

  // Connect to the device specified, get service and characteristic
  const connectDeviceAndCacheCharacteristic = (device) => {
    if (device.gatt.connected && characteristicCache) {
      return Promise.resolve(characteristicCache)
    }

    log('Connecting to GATT server...')

    return device.gatt.connect().
      then(server => {
        log('GATT server connected, getting service...')

        return server.getPrimaryService(Service)
      }).
      then(service => {
        log('Service found, getting characteristic...')

        return service.getCharacteristic(Characteristic)
      }).
      then(characteristic => {
        log('Characteristic found')
        characteristicCache = characteristic
        return characteristicCache
      })
  }

  // Enable the characteristic changes notification
  const startNotifications = (characteristic) => {
    log('Starting notifications...')

    return characteristic.startNotifications().
      then(() => {
        log('Notifications started')

        characteristic.addEventListener('characteristicvaluechanged',
          handleCharacteristicValueChanged)
      })
  }

  const handleCharacteristicValueChanged = (event) => {
    const value = event.target.value.getUint8(1)
    console.log("0", event.target.value.getUint8(0))
    console.log("1", event.target.value.getUint8(1))
    console.log("2", event.target.value.getUint8(2))
    console.log("3", event.target.value.getUint8(3))
    log(value, 'in')
  }

  const writeToCharacteristic = (characteristic, data) => {
    characteristic.writeValue(new TextEncoder().encode(data));
  }

  // Output to terminal
  const log = (data, type = '') => {
    console.log(data)
  }

  return (
    <div>
      <button onClick={connect}>
        Connect
      </button>
      <button onClick={disconnect}>
        disconnect
      </button>
    </div>
  )
}
