import Main from "./Main";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { StripeProvider } from "@stripe/stripe-react-native";

const stripeKey =
  "pk_test_51QTNnhDAeoRetvrkKoZM8YUl39VDck78nN9NplIeorqqUceITCnCxu3mJw2CGyX1zIgAJATInkExKcAS8DVJV7vm00zmUKMf6u";

export default function App() {
  return (
    <StripeProvider
      threeDSecureParams={{
        backgroundColor: "#fff",
        timeout: 5,
      }}
      merchantIdentifier="eshop-aymane"
      publishableKey={stripeKey}
    >
      <Provider store={store}>
        <Main />
      </Provider>
    </StripeProvider>
  );
}