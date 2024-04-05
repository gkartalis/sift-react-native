import { NativeModules } from 'react-native';

type SiftReactNativeType = {
  setSiftConfig(
    accountId: string,
    beaconKey: string,
    disallowCollectingLocationData: boolean,
    serverUrlFormat: string
  ): void;
  setPageName(pageName: String): void;
  setUserId(userId: string): void;
  unsetUserId(): void;
  upload(): void;
};

const { SiftReactNative } = NativeModules;

export default SiftReactNative as SiftReactNativeType;
