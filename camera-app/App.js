import { StyleSheet, Text, View, StatusBar, ScrollView, Image, Dimensions, ToastAndroid } from 'react-native';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import { useState, useRef, useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';
import Button from './app/components/Button';
import Slider from '@react-native-community/slider';

const dimension = Dimensions.get('screen');

export default function App() {
  const cameraRef = useRef(Camera);
  const [photo, setPhoto] = useState(null);
  const [hasCameraPermission, setCameraPermission] = useState(null);
  const [hasMediaLibraryPermission, setMediaLibraryPermission] = useState(null);
  const [cameraType, setCameraType] = useState(CameraType.back);
  /**
   * CameraType.back => For Back Camera
   * CameraType.front => For Front Camera
  */
  const [flashMode, setFlashMode] = useState(FlashMode.off);
  const [zoomValue, setZoomValue] = useState(0);

  const handleImageCapture = async () => {
    console.log('Image Capture Button Clicked');
    let options = {
      quality: 1, // Compression Quality
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto.uri);
    saveImage(newPhoto.uri);
  }

  useEffect(() => {
    (
      async () => {
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        setCameraPermission(cameraStatus.status === 'granted');

        const mediaLibraryStatus = await MediaLibrary.requestPermissionsAsync();
        console.log(mediaLibraryStatus);
        setMediaLibraryPermission(mediaLibraryStatus.granted === 'granted');
      }
    )() // IIFE To Run Permission Code Immediately
  }, []);

  const handleCameraType = () => {
    setCameraType(cameraType === CameraType.back ?  CameraType.front : CameraType.back)
    // Change Camera Type
  }

  const handleCameraFlash = () => {
    if(cameraType === 'front') 
      ToastAndroid.showWithGravity('Flash is not available on front side', ToastAndroid.LONG, ToastAndroid.BOTTOM)

    setFlashMode(flashMode === FlashMode.off ? FlashMode.torch : FlashMode.off)
    // Change Camera Flash
  }

  const saveImage = async (image_uri) => {
    const res = await MediaLibrary.createAssetAsync(image_uri);
    console.log(res);
  }

  return (
    <ScrollView>
      <StatusBar barStyle={'default'} />
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Expo Camera Application</Text>
          </View>
          <View style={styles.cameraContainer}>
            <Camera 
              ref={cameraRef} 
              type={cameraType} 
              style={styles.camera}
              flashMode={flashMode}
              zoom={zoomValue}
            ></Camera>
          </View>
          <View>
            <View style={styles.buttonContainer}>
              <Button title='Capture Image' onPress={handleImageCapture} />
              <Button title='Change Camera' onPress={handleCameraType} />
            </View>
            <View style={styles.buttonContainer}>
              <Button title='Flash' onPress={handleCameraFlash} />
              <Slider
                style={{width: '100%', height: 50}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#3944f7"
                maximumTrackTintColor="#000000"
                thumbTintColor='#6FC678'
                value={zoomValue}
                onValueChange={zoomLevel => setZoomValue(zoomLevel)}
              />
            </View>
          </View>
          <View>
            { photo && <Image source={{ uri: photo }} style={{width: 200, height: 200}} /> }
          </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#3944f7',
    padding: 5,
    width: '100%',
    color: 'white',
  },
  cameraContainer: {
    width: dimension.width,
    height: dimension.height / 2,
    paddingRight: 5,
    marginTop: 10,
  },
  camera: {
    padding: 5,
    width: dimension.width * 1,
    height: dimension.height / 2,
  },
  buttonContainer: {
    padding: 5,
    width: dimension.width,
  },
});
