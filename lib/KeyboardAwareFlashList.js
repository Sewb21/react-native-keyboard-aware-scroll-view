import { FlashList } from "@shopify/flash-list";
import listenToKeyboardEvents from "./KeyboardAwareHOC";

export default listenToKeyboardEvents(FlashList);
