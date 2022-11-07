import React from "react";
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

/*
  1. Create the config
*/
export const toastConfig = {
    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
    success: ({...props}) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: '#ff5921', }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontWeight: '400',
          }}
      />
    ),
    
  
     /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
      error: ({...props}) => (
        <ErrorToast
          {...props}
          text1Style={{
            fontSize: 17
          }}
          text2Style={{
            fontSize: 15
          }}
        />
      ),
  
    };