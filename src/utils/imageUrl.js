// src/utils/imageUrl.js

export function getImageUrlFromTokenNumber(tokenNumber) {
    const baseUrl =
      'https://na-assets.pinit.io/Dk6Ug2wbS8WiRF18AaAqJHyx93dWx7q5bxPmm2WxKP8K/bdaecbad-b31e-42b2-b0ea-25f9b44219ff/';
    return `${baseUrl}${tokenNumber}`;
  }
  