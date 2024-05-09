// import { addMessageBox, Message } from './util/message'
// import { addNoticeBox, Notice } from './util/notice'

export default () => {
  const cacheOptions = globalThis.$mt
  // const message = Message

  globalThis.$mt = {
    ...cacheOptions,
    // message,
    // notice: Notice
  }
  // addMessageBox()
  // addNoticeBox()
}
