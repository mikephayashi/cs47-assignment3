import { WebView } from "react-native-webview";

const LinkWebView = ({ route, navigation }) => {
  const { url } = route.params;
  console.log(url);

  return (
    <WebView
      source={{
        uri: url,
      }}
    />
  );
};

export default LinkWebView;