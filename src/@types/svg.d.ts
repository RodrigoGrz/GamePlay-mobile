declare module "*.svg" {
    import React from 'react';
    import { Rect, SvgProps } from 'react-native-svg';
    const content: React.FS<SvgProps>;
    export default content;
}